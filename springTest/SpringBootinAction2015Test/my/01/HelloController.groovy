@RestController
class HelloController{
	@RequestMapping("/")
	def hello(){
		return "Hello,Bear"
	}
}