package com.packtpublishing.tddjava.ch08.alexandria;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.*;

public class BooksTest {

    @Test
    public void should_search_for_any_past_state() {
        Book book1 = new Book("title", "author", States.AVAILABLE);
        book1.censor();

        Books books = new Books();
        books.add(book1);

        assertThat(books.filterByState(String.valueOf(States.AVAILABLE)).isEmpty(), is(false));
    }

}