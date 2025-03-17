## Bit Strings

One way to represent [[Set Definitions#Set|sets]] in computers is by using *bit strings*. First, specify an arbitrary ordering of the [[Set Definitions#Element|elements]] of $U$, with the assumption that $U$ is [[Set Properties#Cardinality|finite]].

> [!Example]
> Let $U = \{ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 \}$
> 
> 1. What bit string represents the subset of all odd integers in $U$? <br>
>    $\{ 9, 7, 5, 3, 1 \} =$ `0101010101`
>    
> 2. What is the subset of all even integers in $U$? <br>
>    $\{ 10, 8, 6, 4, 2 \} =$ `1010101010`
>    
> 3. What is the subset of integers not exceeding 5 in $U$? <br>
>    $\{ 5, 4, 3, 2, 1 \} =$ `0000011111`
>  

^example

## Bit Flags

In Java, we can represent [[Set Definitions#Set|sets]] as **bit flags** using the `int` data type. Ideally, we'd want to use *unsigned integers*, but since Java doesn't implement this, we'll just have to be careful that all the values we're using, $n$, are within the constraints $1 \leq n \leq 2^{|U|} - 1$.

Java supports representing integers in *binary literals*, denoted by `0b` preceding the binary string, with as many optional leading zeroes (but considering Java `int` values take up 32 bits of memory, the length of the binary string should not be more than that).

> [!Example]
> ```java
> int one = 0b0001;
> ```

Using the example set $U$ [[#Bit Strings|above]], let's try to represent each [[Set Definitions#Element|element]] as a **bit flag**.

> [!Note] Code
> ```java
> public static final int ONE    = 0b0000000001; // 1  
> public static final int TWO    = 0b0000000010; // 2  
> public static final int THREE  = 0b0000000100; // 4  
> public static final int FOUR   = 0b0000001000; // 8  
> public static final int FIVE   = 0b0000010000; // 16  
> public static final int SIX    = 0b0000100000; // 32  
> public static final int SEVEN  = 0b0001000000; // 64  
> public static final int EIGHT  = 0b0010000000; // 128  
> public static final int NINE   = 0b0100000000; // 256  
> public static final int TEN    = 0b1000000000; // 512
> ```

As shown, each of these variables are assigned a single binary digit `1` in each of the 10 digits we'll be using (as $|U| = 10$), hence their more human readable (base 10) value in the comments besides them. Take note at how they are all powers of 2.

## Bitwise Operations

### Bitwise OR

You can think of each [[#Bit Flags|bit flag]] as a [[Set Types#Singleton Set|singleton set]]. Therefore, to make any arbitrary [[Set Types#Subset|subset]] of $U$, we can simply perform [[Set Operations#Union|unions]]. For this, we can use the **bitwise OR** operator, `|`.

> [!Example]
> To represent $\text{odd} = \{1\} \cup \{3\} \cup \{5\} \cup \{7\} \cup \{9\}$ we can do:
> ```java
> int odd = ONE | THREE | FIVE | SEVEN | NINE;
> ```

For the following examples, we'll write a simple function to print out the binary and integer representation of the `int` sets we'll be using.

> [!Note] Code
> ```java
> public static void printAsByteString(int n) {  
>     System.out.println(String.format("%10s", 
> 	    Integer.toBinaryString(n))
> 	    .replace(' ', '0') + " : " + n);
> }
> ```
> 
> > [!Example]
> > 
> >Running...
> >
> >```java
> >printAsByteString(odd);
> >```
> >
> >...results in:
> >
> >```txt
> >0101010101 : 341
> >```
> >
> >We can see that it is the same odd set *bit string* in the [[Set Representations#^example|example]] above.

### Bitwise XOR

Using [[#Bitwise OR|bitwise OR]], we can also define $U$ similar to the [[Set Representations#^example|example]] above as:

> [!Note] Code
> ```java
> int u = ONE | TWO | THREE | FOUR | FIVE | SIX | SEVEN | EIGHT | NINE | TEN;
> ```

If we want to get the [[Set Definitions#Set|set]] of even numbers from $U$, we can perform a **bitwise XOR** (exclusive OR) between `u` and `odd`. In Java, this operator is denoted by `^`.

> [!Example]
> Running...
> ```java
> int even = u ^ odd;  
> printAsByteString(even);
> ```
> ...results in:
> 
> ```txt
> 1010101010 : 682
> ```
> Which is also the same as the even *bit string* from the  [[Set Representations#^example|example]] above.
> 
> We can visualize the XOR operation between $U$ and `odd` like flipping all the bits of `odd` as:
> 
> ![[XOR.excalidraw.png]]

> [!Warning]
> You might think that we are performing the equivalent of a [[Set Operations#Complement|set complementation]] by using `^` here, but this is actually a [[Set Operations#Symmetric Difference|symmetric difference operation]]. It is only the case here that $U \oplus \text{even} = U - \text{even}$. This is explored further in the section for getting [[#Complement|complements]] below.

### Bitwise AND

The **bitwise AND** operator `&` works exactly as a [[Set Operations#Intersection|set intersection operation]]. We can use this to check for [[Set Properties#Membership|membership]]. And since we are using [[Set Types#Singleton Set|singleton sets]] to represent each [[Set Definitions#Element|element]], we can write a general function to check for [[Set Types#Subset|subsets]], following the logic that $A \cap B = A \implies A \subseteq B$.

> [!Note] Code
> ```java
> public static boolean isSubset(int a, int b) {  
>     return (a & b) == a;  
> }  
> ```

Using this, we can define another helper function to print the [[Set Definitions#Set|set]] in [[Set Notations#Roster Form|roster form notation]], for better visualization.

> [!NOTE] Code
> 
> ```java
> public static void printAsRosterForm(int n) {  
>     List<String> set = new ArrayList<>();  
>     if(isSubset(ONE,   n)) set.add("1");  
>     if(isSubset(TWO,   n)) set.add("2");  
>     if(isSubset(THREE, n)) set.add("3");  
>     if(isSubset(FOUR,  n)) set.add("4");  
>     if(isSubset(FIVE,  n)) set.add("5");  
>     if(isSubset(SIX,   n)) set.add("6");  
>     if(isSubset(SEVEN, n)) set.add("7");  
>     if(isSubset(EIGHT, n)) set.add("8");  
>     if(isSubset(NINE,  n)) set.add("9");  
>     if(isSubset(TEN,   n)) set.add("10");  
>     System.out.println("{ " + String.join(", ", set) + " }");  
> }
> ```
> We can write an easier to use, generalized `printSet` function like so:
> ```java
> public static void printSet(int n) {  
>     printAsByteString(n);  
>     printAsRosterForm(n); 
> }
> ```
> 
> > [!Example]
> > So running...
> > 
> > ```java
> > printSet(even);
> > ```
> > 
> > ...would result in:
> > 
> > ```txt
> > 1010101010 : 682
> > { 2, 4, 6, 8, 10 }
> > ```

Just like in the [[Set Representations#^example|example]] above, let us try to represent a [[Set Types#Subset|subset]] of $U$ with integers not exceeding 5. Then we'll [[Set Operations#Intersection|intersect]] it with the [[#Bitwise OR|odd subset]] and get the result.

> [!Example]
> 
> ```java
> int notExceedingFive = ONE | TWO | THREE | FOUR | FIVE;  
> int notExceedingFiveIntersectionOdd = notExceedingFive & odd;  
> printSet(notExceedingFiveIntersectionOdd);
> ```
> 
> Which if we run, should get us:
> 
> ```txt
> 0000010101 : 21
> { 1, 3, 5 }
> ```
> 
> Let $A = \text{notExceedingFive}, B = \text{odd}$ 
> 
> ![[IntersectVD.excalidraw.png]]

### Complement

Getting the [[Set Operations#Complement|complement]] using bitwise operations requires the usage of both `&` and `^`. Let us first demonstrate [[Set Operations#Symmetric Difference|symmetric difference]] again (without using $U$) by getting $\text{notExceedingFive} \oplus {odd}$.

> [!Example]
> 
> ```java
> int symmetricDifference = notExceedingFive ^ odd;  
> printSet(symmetricDifference);
> ```
> 
> Which results in:
> 
> ```txt
> 0101001010 : 330
> { 2, 4, 7, 9 }
> ```
> 
> Let $A = \text{notExceedingFive}, B = \text{odd}$ 
> 
> ![[__Media/__Excalidraw/Discrete Math Draw/Set Representations/SymDiffVD.excalidraw.png|SymDiffVD.excalidraw.png]]

From the [[Set Identities#Identity Laws|set identity laws]], $A - B = A \cap (B \oplus A)$ translates to:

> [!Note] Code
> ```java
> public static int complement(int a, int b) {  
>     return a & (b ^ a);  
> }
> ```

We can then use this function to perform a [[Set Operations#Complement|complement operation]].

> [!Example]
> 
> ```java
> int notExceedingFiveComplementOdd = complement(notExceedingFive, odd);  
> printSet(notExceedingFiveComplementOdd);
> ```
> 
> Which gives us:
> 
> ```txt
> 0000001010 : 10
> { 2, 4 }
> ```
> 
> Let $A = \text{notExceedingFive}, B = \text{odd}$ 
> 
> ![[__Media/__Excalidraw/Discrete Math Draw/Set Representations/ComplementVD.excalidraw.png|ComplementVD.excalidraw.png]]
