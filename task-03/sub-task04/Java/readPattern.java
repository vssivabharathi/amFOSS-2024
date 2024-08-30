import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class readPattern {
    public static void main(String[] args) {
        // File paths
        String inputFilePath = "input.txt";
        String outputFilePath = "output.txt";
        int n;

        // Reading the number n from input.txt
        try (BufferedReader inputFile = new BufferedReader(new FileReader(inputFilePath))) {
            n = Integer.parseInt(inputFile.readLine().trim());
        } catch (IOException | NumberFormatException e) {
            System.out.println("Error reading from input file or invalid number format.");
            e.printStackTrace();
            return;
        }

        // Generating the diamond pattern and writing it to output.txt
        try (BufferedWriter outputFile = new BufferedWriter(new FileWriter(outputFilePath))) {
            // Upper part of the diamond
            for (int i = 1; i <= n; i++) {
                for (int j = n; j > i; j--) {
                    outputFile.write(" ");
                }
                for (int k = 1; k <= (2 * i - 1); k++) {
                    outputFile.write("*");
                }
                outputFile.write(System.lineSeparator());
            }
            // Lower part of the diamond
            for (int i = n - 1; i >= 1; i--) {
                for (int j = n; j > i; j--) {
                    outputFile.write(" ");
                }
                for (int k = 1; k <= (2 * i - 1); k++) {
                    outputFile.write("*");
                }
                outputFile.write(System.lineSeparator());
            }
        } catch (IOException e) {
            System.out.println("Error writing to output file.");
            e.printStackTrace();
        }

        System.out.println("Diamond pattern generated and written to output.txt.");
    }
}
