import System.IO

main :: IO ()
main = do
    let inputFilePath = "input.txt"
    let outputFilePath = "output.txt"

    -- Read the number n from input.txt
    contents <- readFile inputFilePath
    let n = read (head (lines contents)) :: Int

    -- Generate the diamond pattern
    let pattern = unlines (upperDiamond n ++ lowerDiamond (n - 1))

    -- Write to output.txt
    writeFile outputFilePath pattern
    putStrLn "Diamond pattern generated and written to output.txt."

upperDiamond :: Int -> [String]
upperDiamond n = [replicate (n - i) ' ' ++ replicate (2 * i - 1) '*' | i <- [1..n]]

lowerDiamond :: Int -> [String]
lowerDiamond n = [replicate (n - i) ' ' ++ replicate (2 * i - 1) '*' | i <- [n, n-1..1]]
