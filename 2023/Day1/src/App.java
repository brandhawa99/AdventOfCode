import java.io.File;// Import the File class
import java.io.FileNotFoundException;
import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        int total = 0;
        char[] nums = { '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' };
        try {
            File myObj = new File("./data.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                int left = data.length(), right = 0;
                for (char c : nums) {
                    if (data.indexOf(c) >= 0) {
                        left = Math.min(data.indexOf(c), left);
                    }
                    right = Math.max(data.lastIndexOf(c), right);
                }
                String numVal = "" + data.charAt(left) + data.charAt(right);
                total += Integer.parseInt(numVal);
            }
            System.out.println(total);
            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occured");
            e.printStackTrace();
        }
    }
}
