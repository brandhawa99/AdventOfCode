import java.util.*;
import java.io.*;

public class App {

    public static void main(String[] args) throws Exception {
        int gameNumberTotal = 0;
        // maximum number of cubes allowed per game per colour;
        int greenMax = 13;
        int redMax = 12;
        int blueMax = 14;
        try {

            File inputs = new File("./input.txt");
            Scanner scanner = new Scanner(inputs);

            while (scanner.hasNextLine()) {
                // get current game
                String fullGame = scanner.nextLine();
                // Get the game ID
                String gameID = fullGame.substring(fullGame.indexOf(" ") + 1, fullGame.indexOf(":"));

                // remove The Game ID part;
                String game = fullGame.substring(fullGame.indexOf(":") + 1);
                int gameNumber = Integer.parseInt(gameID);

                String currNumber = "";
                int cubeCount;
                boolean hasBadVal = false;
                for (int i = 0; i < game.length(); i++) {
                    char currVal = game.charAt(i);

                    if (currVal >= '0' && currVal <= '9') {
                        currNumber += currVal;
                        continue;
                    }

                    if (currVal == 'r') {
                        cubeCount = Integer.parseInt(currNumber.trim());
                        currNumber = "";
                        i += "ed".length();
                        if (cubeCount > redMax) {
                            hasBadVal = true;
                            break;
                        }

                    }
                    if (currVal == 'g') {
                        cubeCount = Integer.parseInt(currNumber.trim());
                        currNumber = "";
                        i += "reen".length();
                        if (cubeCount > greenMax) {
                            hasBadVal = true;
                            break;
                        }
                    }
                    if (currVal == 'b') {
                        cubeCount = Integer.parseInt(currNumber.trim());
                        currNumber = "";
                        i += "lue".length();
                        if (cubeCount > blueMax) {
                            hasBadVal = true;
                            break;
                        }
                    }

                }
                if (!hasBadVal) {
                    gameNumberTotal += gameNumber;
                }
            }
            System.out.println(gameNumberTotal);
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred");
            e.printStackTrace();
        }

    }
}
