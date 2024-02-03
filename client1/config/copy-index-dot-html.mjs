import fs from "fs/promises";
import path from "path";

const directory = 'dist';

// Check if the directory exists
export default async function setupDirectory() {
    try {
        await fs.access(directory);
        // If the directory exists, remove it
        await fs.rm(directory, { recursive: true });
    } catch (error) {
        // The directory doesn't exist, so continue
    }

    // Create the directory
    await fs.mkdir(directory);

    // Copy the file
    const sourceFile = './src/index.html';
    const destinationFile = path.join(directory, 'index.html');
    await fs.copyFile(sourceFile, destinationFile);

    console.log('File copied:', sourceFile, '=>', destinationFile);
}