printPattern :: Int -> IO ()
printPattern rows = do
  forM_ [0..rows-1] $ \i -> do
    forM_ [0..rows-i-1] $ \_ -> putStr " "
    forM_ [0..2*i] $ \_ -> putStr "*"
    putStrLn ""
  forM_ [rows-2,rows-3..0] $ \i -> do
    forM_ [0..rows-i-1] $ \_ -> putStr " "
    forM_ [0..2*i] $ \_ -> putStr "*"
    putStrLn ""

main :: IO ()
main = printPattern 3