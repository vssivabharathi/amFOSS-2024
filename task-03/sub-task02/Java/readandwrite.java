import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class readandwrite {
    public static void main(String[] args) {
        //filepath
        String inputFilePath = "input.txt";
        String outputFilePath = "output.txt";
         //reding
        StringBuilder content = new StringBuilder();
        try (BufferedReader inputFile = new BufferedReader(new FileReader(inputFilePath))) {
            String line;
            while ((line = inputFile.readLine()) != null) {
                content.append(line).append(System.lineSeparator());
            }
        } catch (IOException e) {
            System.out.println("Input file not found.");
            e.printStackTrace();
            return;
        }
        //using try 
        try (BufferedWriter outputFile = new BufferedWriter(new FileWriter(outputFilePath))) {
            outputFile.write(content.toString());
        } catch (IOException e) {
            System.out.println("Error writing to output file.");
            e.printStackTrace();
            return;
        }

        // Read output file
        try (BufferedReader outputFile = new BufferedReader(new FileReader(outputFilePath))) {
            String line;
            System.out.println("Contents of output.txt:");
            while ((line = outputFile.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Error reading from output file.");
            e.printStackTrace();
        }
    }
}
