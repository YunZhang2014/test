public class Client {

    @SuppressWarnings(value="deprecation")
    public static void main(String[] args) {
        Server server = new Server();
        System.out.println(server.getText());
    }

}
