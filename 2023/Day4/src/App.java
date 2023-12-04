import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class App {

    public static void main(String[] args) throws Exception {
        int total = 0;
        try {
            File file = new File("./src/input.txt");
            Scanner scanner = new Scanner(file);

            while (scanner.hasNext()) {
                var currentLine = scanner.nextLine();
                var winningNumber = currentLine.substring(currentLine.indexOf(':') + 1, currentLine.indexOf('|'));
                var myNumbers = currentLine.substring(currentLine.indexOf('|') + 1);
                winningNumber = winningNumber.replace("  ", " ").trim();
                myNumbers = myNumbers.replace("  ", " ").trim();
                String[] winningArr = winningNumber.split(" ");
                String[] myNumsArray = myNumbers.split(" ");

                HashSet<String> set = new HashSet<String>(Arrays.asList(winningArr));
                int currentPoints = 0;
                for (var i = 0; i < myNumsArray.length; i++) {

                    if (set.contains(myNumsArray[i])) {
                        if (currentPoints == 0) {
                            currentPoints += 1;
                        } else {
                            currentPoints *= 2;
                        }
                    }

                }
                total += currentPoints;
            }
            System.out.println(total);
        } catch (FileNotFoundException e) {
            System.out.println("File was not found");
            e.printStackTrace();
        }
    }
}
