import {Component, Inject, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import template from './task-list.html!text';
import {Task} from './task/task';
import {EnterTask} from './enter-task/enter-task';
import {Toggle} from '../ui/toggle/toggle';
import {ActivityService} from '../activities/activity-service/activity-service';
import {limitWithEllipsis} from '../utilities/string-utilities';

@Component({
  selector: 'ngc-task-list',
  host: {
    class: 'task-list'
  },
  template,
  encapsulation: ViewEncapsulation.None,
  directives: [Task, EnterTask, Toggle],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskList {
  @Input() tasks;
  // Subject for logging activities
  @Input() activitySubject;
  // Event emitter for emitting an event once the task list has been changed
  @Output() tasksUpdated = new EventEmitter();

  constructor(@Inject(ActivityService) activityService) {
    this.taskFilterList = ['all', 'open', 'done'];
    this.selectedTaskFilter = 'all';
    this.activityService = activityService;
  }

  ngOnChanges(changes) {
    if (changes.tasks) {
      this.taskFilterChange(this.selectedTaskFilter);
    }
  }

  taskFilterChange(filter) {
    this.selectedTaskFilter = filter;
    this.filteredTasks = this.tasks ? this.tasks.filter((task) => {
      if (filter === 'all') {
        return true;
      } else if (filter === 'open') {
        return !task.done;
      } else {
        return task.done;
      }
    }) : [];
  }

  // We use the reference of the old task to updated one specific item within the task list.
  onTaskUpdated(task, updatedData) {
    const tasks = this.tasks.slice();
    const oldTask = tasks.splice(tasks.indexOf(task), 1, Object.assign({}, task, updatedData))[0];
    this.tasksUpdated.next(tasks);
    // Creating an activity log for the updated task
    this.activityService.logActivity(
      this.activitySubject.id,
      'tasks',
      'A task was updated',
      `The task "${limitWithEllipsis(oldTask.title, 30)}" was updated on #${this.activitySubject.document.data._id}.`
    );
  }

  // Using the reference of a task, this function will remove it from the tasks list and send an update
  onTaskDeleted(task) {
    const tasks = this.tasks.slice();
    const removed = tasks.splice(tasks.indexOf(task), 1)[0];
    this.tasksUpdated.next(tasks);
    // Creating an activity log for the deleted task
    this.activityService.logActivity(
      this.activitySubject.id,
      'tasks',
      'A task was deleted',
      `The task "${limitWithEllipsis(removed.title, 30)}" was deleted from #${this.activitySubject.document.data._id}.`
    );
  }

  // Function to add a new task
  addTask(title) {
    const tasks = this.tasks.slice();
    tasks.push({
      created: +new Date(),
      title,
      done: null
    });
    this.tasksUpdated.next(tasks);
    // Creating an activity log for the added task
    this.activityService.logActivity(
      this.activitySubject.id,
      'tasks',
      'A task was added',
      `A new task "${limitWithEllipsis(title, 30)}" was added to #${this.activitySubject.document.data._id}.`
    );
  }
}
