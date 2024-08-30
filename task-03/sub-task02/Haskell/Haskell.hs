import System.IO

main :: IO ()
main = do
    -- Read from input file
    inputContent <- readFile "input.txt"
    
    -- Write to output file
    writeFile "output.txt" inputContent
    
    -- Read from output file
    outputContent <- readFile "output.txt"
    
    -- Display the contents of the output file
    putStrLn "Contents of output.txt:"
    putStrLn outputContent
