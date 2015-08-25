package enums;
import static net.mindview.util.Print.print;
import static net.mindview.util.Print.printnb;

public class EnumClass {
	enum Shrubbery {GROUND,CRAWLING,HANGING};
	public static void main(String[] args) {
		for (Shrubbery s : Shrubbery.values()) {
			print(s + " ordinal: " + s.ordinal());
			printnb(s.compareTo(Shrubbery.CRAWLING) + " ");
			print(s == Shrubbery.CRAWLING);
			print(s.getDeclaringClass());
			print(s.name());
			print("----------------------");
		}
		for (String s : "HANGING CRAWLING GROUND".split(" ")) {
			Shrubbery shrub = Enum.valueOf(Shrubbery.class, s);
			print(shrub);
		}

	}

}
