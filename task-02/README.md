# Terminal-Chaos

## Stage-01


While navigating through my directories, I made my way to the `Documents` folder and then into the `Terminal-Chaos` directory. Inside that, I accessed the `Arrakis-dex` subfolder. To better understand its structure, I ran the `tree` command, which provided a clear view of the contents.

Exploring further, I came across a parchment file. Using the `cat` command to read it, I discovered a hidden message along with an encoded string.

### Code Found:
```
#1 aHR0cHM6Ly9naXRo
```

---

## Stage-02


After running `git branch -r`, I found myself facing two distinct realms: **lightrealm** and **darkrealm**. Using `git checkout`, I decided to dive into the **lightrealm**. From there, it was all about discovery and persistence.

The `tree` command became my map, guiding me through the directories. After sifting through files using `grep`, I eventually uncovered two significant clues: **Mistveil** and **Moonbloom**. The decoding process was tricky. I had to piece them together, replace each letter with its predecessor in the alphabet, and strip out all the vowels. The result?

### Holy Spell:
```
LnnmknnlLhrsdhk
```

Next, I stumbled upon a file named **Kharnok the Bloodforged.py** within the **Lightrealm**. Running the file prompted me for the Holy Spell. Once entered, I faced off against **Kharnok the Bloodforged** in an intense battle. Victory rewarded me with the coveted **Celestial Veil Amulet**.

### Celestial Veil Amulet Code:
```
CSigVmaroAn
```

Not stopping there, I also came across the **Light Book**, revealing another piece of the puzzle—my second code:

### Code #2:
```
dWIuY29tL2FtYW5ze
```


## Stage-03

As I delved into the **Dark Realm I** and **Dark Realm II**, I used the code from the **Celestial Veil Amulet** to unlock the chests within these realms. Each chest revealed valuable information:

### Codes Discovered in the Darkbook:
- **Darkbook 1 (Code #3):**
  ```
  GNhbGlidXIvVGVyb
  ```
- **Darkbook 2 (Code #4):**
  ```
  WluYWwtQ2hhb3MtR29kU3VpdGU=
  ```

Merging these new codes with the previous ones I had gathered led me to a complete encoded link:

### Decoded Link:
```
aHR0cHM6Ly9naXRodWIuY29tL2FtYW5zeGNhbGlidXIvVGVybWluYWwtQ2hhb3MtR29kU3VpdGU=
```

You can explore the full content using the link below:

[Explore the Repository](https://github.com/amansxcalibur/Terminal-Chaos-GodSuite)



## Stage-04


After discovering the necessary codes, I located the **GodSuite** repository and proceeded to clone it to my local system for further exploration.

Upon accessing the repository, I examined the commit history using the `git log` command. To delve into the specifics of each commit, I utilized the `git show` command. During my review, I came across a noteworthy detail in the third commit: a link leading to the "To the Stars" Git repository.

I cloned the "To the Stars" repository, navigated through its contents with `ls`, and executed the `victory.py` script. To document my achievement, I captured a screenshot of the successful execution and placed it in the `task2` folder.




