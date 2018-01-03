package utils;

import java.io.FileWriter;
import java.io.IOException;

public class MyClass {

	public static void main(String[] args) {		
		
		try {
            FileWriter writer = new FileWriter("data/users.txt", true);
            writer.write(args[0] + "-" + args[1] + "-" + args[2] + "|");
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
	}
}
