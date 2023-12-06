import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class App {

    public int[] mappedSeeds(ArrayList<Integer> map, int[] startSeeds) {

        return new int[] { -1 };
    }

    public static void main(String[] args) {

        // Day 5 Advent of code
        /**
         * Input lists all seeds that need to be planted + type of soil to use
         * + type of water to use with each fertilizer
         * each seed, soil fertilizer identified with a #
         * number are resued !!123 soil does not relate to 123 fertilizer!!
         * Ex.
         * Starting seeds 79, 14, 55, 13
         * **seed to soil map
         * destination range start, source range start, range length
         * 50 98 2
         * 52 50 48
         * -- Then 79 , 14 , 55 , 13 TURN INTO
         * -- 81 , 14 , 57 , 13
         */

        try {
            System.out.println("Started");
            File file = new File("./src/input.txt");
            Scanner scanner = new Scanner(file);

            // get Seed numbers put in array
            String seedStr = scanner.nextLine();
            seedStr = seedStr.substring(seedStr.indexOf(' ') + 1);
            String[] seedTemp = seedStr.split(" ");
            long[] seeds = new long[seedTemp.length];

            // turn string[] into long []
            for (int i = 0; i < seedTemp.length; i++) {
                seeds[i] = Long.parseLong(seedTemp[i]);
            }

            // do mapping / create maps

            while (scanner.hasNext()) {
                // map next sequence
                while (scanner.hasNext("map")) {
                    String x = scanner.nextLine();
                    System.out.println(x);
                }
                String x = scanner.nextLine();

            }

        } catch (FileNotFoundException e) {
            System.out.println("File not found");
            e.printStackTrace();

        }

    }
}