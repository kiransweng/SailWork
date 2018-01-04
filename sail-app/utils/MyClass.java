package utils;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class MyClass {

	public static void main(String[] args) {

		try {
            // FileWriter writer = new FileWriter("data/users.txt", true);
            // writer.write(args[0] + "-" + args[1] + "-" + args[2] + "|");
            // writer.close();			
			
			String fileName = "data/userDetails.json";			
            FileWriter writer=new FileWriter(fileName, true);                 
            
            String content = new String(Files.readAllBytes(Paths.get(fileName))).trim();
            String dataToWrite = "{\"firstName\":\"" + args[0] + "\"," + "\"lastName\":\"" + args[1] + "\"," + "\"email\":\"" + args[2] + "\"}";
            if(content.isEmpty()) {            	
            	writer.write("[" + dataToWrite +"]");
            }
            else{
            	writer.close();
            	File file = new File(fileName); 
            	if (file.exists() && file.isFile())
            	  {
            	  file.delete();
            	  }
            	file.createNewFile();
            	            	
            	content = content.replaceAll("]", ",");
            	content+= dataToWrite + "]";
            	writer=new FileWriter(fileName); 
            	writer.write(content);            	
            }
            
            writer.close();
           
        } catch (IOException e) {
            e.printStackTrace();
        }
	}
}
