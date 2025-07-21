export type UserRole = "Student" | "Faculty"

export interface Group {
  id: string
  name: string
  semesterBranch: string
  description?: string
  inviteCode: string
}

export interface Note {
  id: string
  title: string
  subject: string
  type: "PDF" | "Text"
  description?: string
  uploadedBy: {
    name: string
    role: UserRole
  }
  isOfficial: boolean
  content: string // For text notes, actual content. For PDF, a placeholder URL.
}

export const mockGroups: Group[] = [
  {
    id: "grp1",
    name: "CSE-1'2K25 - Programming Fundamentals",
    semesterBranch: "Fall 2024 / Computer Science",
    description: "Foundational concepts of computer science.",
    inviteCode: "CSE12K25",
  },
  {
    id: "grp2",
    name: "CSE(AI)'2K24 - Artificial Intelligence Basics",
    semesterBranch: "Spring 2025 / Computer Science (AI)",
    description: "Introduction to AI concepts and applications.",
    inviteCode: "CSEAI2K24",
  },
  {
    id: "grp3",
    name: "CSE(DS)'2K25 - Data Structures & Algorithms",
    semesterBranch: "Fall 2024 / Computer Science (DS)",
    description: "Core data structures and algorithm design.",
    inviteCode: "CSEDS2K25",
  },
  {
    id: "grp4",
    name: "MECH'2K22 - Thermodynamics",
    semesterBranch: "Spring 2023 / Mechanical Engineering",
    description: "Principles of heat and energy transfer.",
    inviteCode: "MECH2K22",
  },
]

export const mockNotes: Note[] = [
  {
    id: "note1",
    title: "Lecture 1: Algorithms Basics",
    subject: "Algorithms",
    type: "Text",
    description: "Introduction to algorithms and data structures.",
    uploadedBy: { name: "K.Swathi", role: "Faculty" },
    isOfficial: true,
    content: `
# Lecture 1: Algorithms Basics

## What is an Algorithm?
An algorithm is a set of well-defined instructions to solve a particular problem. It's a step-by-step procedure to achieve a desired output.

## Key Characteristics:
1.  **Input:** Zero or more quantities are externally supplied.
2.  **Output:** At least one quantity is produced.
3.  **Definiteness:** Each instruction is clear and unambiguous.
4.  **Finiteness:** The algorithm must terminate after a finite number of steps.
5.  **Effectiveness:** Every instruction must be sufficiently basic that it can be carried out.

## Examples:
*   Sorting a list of numbers.
*   Searching for an element in a data structure.
*   Calculating the factorial of a number.

## Why Study Algorithms?
*   **Efficiency:** To write programs that run faster and use less memory.
*   **Problem Solving:** To develop systematic approaches to complex problems.
*   **Foundation:** Essential for computer science and software engineering.
`,
  },
  {
    id: "note2",
    title: "Computer Networking and Security - Unit 2",
    subject: "Computer Networking and Security",
    type: "Text",
    description: "Detailed notes on Symmetric Encryption, Feistel Cipher, DES, and Block Cipher Modes.",
    uploadedBy: { name: "B.Dinesh Reddy", role: "Faculty" },
    isOfficial: true,
    content: `
UNIT-2 
Symmetric encryption is a form of cryptosystem in which encryption and decryption are performed 
using the same key. It is also known as conventional encryption, Symmetric encryption, secret key or 
single-key encryption. 
TRADITIONAL BLOCK CIPHER STRUCTURE 
Stream Ciphers and Block Ciphers 
A stream cipher is one that encrypts a digital data stream one bit or one byte at a time. Examples 
of classical stream ciphers are the autokeyed Vigenère cipher and the Vernam cipher. 
A block cipher is one in which a block of plaintext is treated as a whole and used to produce a 
ciphertext block of equal length. Typically, a block size of 64 or 128 bits is used.  

THE FEISTEL CIPHER: 
*   Feistel cipher is the execution of two or more simple ciphers in sequence in such a way
    that the final result or product is cryptographically stronger than any of the component
    ciphers.
*   In particular, Feistel proposed the use of a cipher that alternates substitutions and
    permutations, where these terms are defined as follows:
*   Substitution: Each plaintext element or group of elements is uniquely replaced by a
    corresponding ciphertext element or group of elements.
*   Permutation: A sequence of plaintext elements is replaced by a permutation of that
    sequence. That is, no elements are added or deleted or replaced in the sequence, rather the
    order in which the elements appear in the sequence is changed.
FEISTEL CIPHER STRUCTURE: 
The left-hand side of Figure 3.3 depicts the structure proposed by Feistel. 
*   The inputs to the encryption algorithm are a plaintext block of length 2w bits and a key .
    The plaintext block is divided into two halves, L0 and R0.
*   The two halves of the data pass through n rounds of processing and then combine to
    produce the ciphertext block.
*   Each round i has as inputs Li-1 and Ri-1 derived from the previous round, as well as a
    subkey Ki derived from the overall K. In general, the subkeys Ki are different from K and
    from each other.

All rounds have the same structure. A substitution is performed on the left half of the data. This is 
done by applying a round function F to the right half of the data and then taking the exclusive-OR 
of the output of that function and the left half of the data.  
Following this substitution a Permutation is performed that consists of the interchange of the two 
halves of the data. 

The exact realization of a Feistel network depends on the choice of the following parameters 
and design features: 
Block size: Larger block sizes mean greater security (all other things being equal) but reduced 
encryption/decryption speed for a given algorithm. Traditionally, a block size of 64 bits has been 
considered a reasonable tradeoff and was nearly universal in block cipher design. However, the 
new AES uses a 128-bit block size. 
Key size: Larger key size means greater security but may decrease encryption/ decryption speed. 
The greater security is achieved by greater resistance to brute-force attacks and greater confusion. 
Key sizes of 64 bits or less are now widely considered to be inadequate, and 128 bits has become 
a common size. 
Number of rounds: The essence of the Feistel cipher is that a single round offers inadequate 
security but that multiple rounds offer increasing security. A typical size is 16 rounds. 
Subkey generation algorithm: Greater complexity in this algorithm should lead to greater 
difficulty of cryptanalysis. 
Round function F: Again, greater complexity generally means greater resistance to cryptanalysis. 
DATA ENCRYPTION STANDARD (DES): 
DES is a Symmetric-key algorithm for the encryption of electronic data. 
Data Encryption Standard (DES) is a widely-used method of data encryption using a private 
(secret) key 
DES applies a 56-bit key to each 64-bit block of data. The process can run in several modes and 
involves 16 rounds or operations. 

Overall Structure 
DES (and most of the other major symmetric ciphers) is based on a cipher known as the Feistel 
block cipher. 
Looking at the left-hand side of the figure, we can see that the processing of the plaintext proceeds 
in three phases.  
1.  First, the 64-bit plaintext passes through an initial permutation (IP) that rearranges the bits to
    produce the permuted input.
2.  This is followed by a phase consisting of sixteen rounds of the same function, which involves
    both permutation and substitution functions. The output of the last (sixteenth) round consists
    of 64 bits that are a function of the input plaintext and the key. The left and right halves of the
    output are swapped to produce the preoutput.
3.  Finally, the preoutput is passed through a permutation that is the inverse of the initial
    permutation function, to produce the 64-bit cipher text. With the exception of the initial and
    final permutations, DES has the exact structure of a Feistel cipher,
The right-hand portion of below figure shows the way in which the 56-bit key is used. Initially, 
the key is passed through a permutation function. Then, for each of the sixteen rounds, a subkey 
(Ki ) is produced by the combination of a left circular shift and a permutation. The permutation 
function is the same for each round, but a different subkey is produced because of the repeated 
shifts of the key bits. 

Details of Single Round 
Below figure shows the internal structure of a single round. Again, begin by focusing on the left-
hand side of the diagram.  
*   The left and right halves of each 64-bit intermediate value are treated as separate 32-bit
    quantities, labeled L (left) and R (right).
*   As in any classic Feistel cipher, the overall processing at each round can be summarized in the
    following formulas:

*   The round key Ki is 48 bits. The R input is 32 bits. This R input is first expanded to 48 bits by
    using a table that defines a permutation plus an expansion that involves duplication of 16 of
    the R bits .
*   The resulting 48 bits are XORed with Ki . This 48-bit result passes through a substitution
    function that produces a 32-bit output, which is permuted .
. 
S-Box Design in DES :
The role of the S-boxes in the function F is illustrated in Figure 3.7.The substitution consists of a 
set of eight S-boxes, each of which accepts 6 bits as input and produces 4 bits as output 

Shift Rows Transformation 
*   The first row of State is not altered.
*   For the second row, a 1-byte circular left shift is performed.
*   For the third row, a 2-byte circular left shift is performed.
*   For the fourth row, a 3-byte circular left shift is performed
The following is an example of ShiftRows:

Mix columns Transformation 
*   The forward mix column transformation, called MixColumns, operates on
    each column individually.
*   Each byte of a column is mapped into a new value that is a function of all
    four bytes in that column.

AddRoundKey Transformation 
*   In the AddRoundKey transformation, the 128 bits of State are bitwise
    XORed with the 128 bits of the round key.
*   The operation is viewed as a columnwise operation between the 4 bytes of
    a State column and one word of the round key; it can also be viewed as a
    byte-level operation.
    The following is an example of AddRoundKey:
AES KEY EXPANSION 
*   The AES key expansion algorithm takes as input a 4-word (16-byte) key and produces a
    linear array of 44 words (176 bytes).
*   This is sufficient to provide a 4-word round key for the initial AddRoundKey stage and
    each of the 10 rounds of the cipher.
*   The key is copied into the first four words of the expanded key. The remainder of the
    expanded key is filled in four words at a time.
*   Each added word w[i] depends on the immediately preceding word, w[i 1], and the word
    four positions back,w[i 4].

In three out of four cases, a simple XOR is used. For a word whose position in the w array is a 
multiple of 4, a more complex function is used. The function ‘g’ consists of the following 
subfunctions: 
1.  RotWord performs a one-byte circular left shift on a word. This means that an input
    word [b0, b1, b2, b3] is transformed into [b1, b2, b3, b0]. 
2.  SubWord performs a byte substitution on each byte of its input word, using the S-box.
3.  The result of steps 1 and 2 is XORed with a round constant, Rcon[j].

BLOW FISH ALGORITHM: 
Blow fish is a symmetric block cipher developed by bruce schner in year 1993. 
Blow fish is designed to have following characteristics 
Speed: Blowfish encrypts data on 32 bit microprocessor at a rate of 18 clock cycles per byte. 
Compact: it can run in less than 5k memory. 
Simple: very easy to implements. 
Variably secure: the key length is variable and can be as long as 448 bits. This allows a trade off 
between higher speed and higher security. 
Blowfish is a feistal type model. 
ALGORITHM: 
*   Blowfish is feistel type model, iterating a simple encryption function 16 times.
*   Blowfish block size is 64 & key can be upto 448 bits.
*   Blow fish encryption 64bits blocks of plaintext into 64 bit block of cipher.
*   Blow fish make use of a key that ranges from 32bits to 448 bits (one to fourteen 32 bit
    keys).
*   The keys are stored in a k-array (one to 14 32 bits)
    K1,K2----Kj where 1≤ j ≤14. 
*   That key is used to generate 18 “32 bit” subkeys & four “8*32”bits S-boxes.
*   The subkeys are stored in the p-array
    P1,P2,-------P18 
*   There are four s-boxes(each s-box size is 8*32 bits) each with 256 32bit entries.
    S1,0, S1,1,-------------------S1,255 
    S2,0, S2,1,-------------------S2,255 
    S3,0, S3,1,-------------------S3,255 
    S4,0, S4,1,-------------------S4,255 

Encryption and Decryption 
Blowfish uses two primitive operations: 
Addition: Addition of words, denoted by +, is performed modulo 232. 
Bitwise exclusive-OR: This operation is denoted by 
In the above figure 
*   The plaintext is divided into two 32-bit halves LE, and RE,. We use the variables LE, and
    RE, to refer to the left and right half of the data after round i has completed. The algorithm
    can be defined by the following pseudocode:

Single round of Blowfish 
The function F is shown in below Figure. The 32-bit input to F is divided into 4 bytes. If we label 
those bytes a, b, c, and d, then the function can be defined as follows: 
CAST-128 
*   In cryptography, CAST-128 (alternatively CAST5) is a symmetric-key block cipher.
*   CAST-128, also known as CAST5
*   CAST-128 algorithm was created in 1996 by Carlisle Adams and Stafford Tavares. The
    CAST name is based on the initials of its inventors
*   CAST-128 is a 12- or 16-round Feistel network with a 64-bit block size and a key size of
    between 40 to 128 bits (but only in 8-bit increments). The full 16 rounds are used when
    the key size is longer than 80 bits.
*   CAST-128 uses four primitive operations:
    1.  Addition and subtraction: Addition of words, denoted by +, is performed modulo 232.
        The inverse operation, denoted by -, is subtraction modulo 232.
    2.  Bitwise exclusive-OR: This operation is denoted by
    3.  Left circular rotation: The cyclic rotation of word x left by y bits is denoted by x <<< y.
The CAST-128 encryption algorithm can be defined by the following pseudocode. The plaintext 
is divided into two 32-bit halves L0, and R0. We use the variables Li and Ri, to refer to the left and 
right half of the data after round i has completed. The ciphertext is formed by swapping the output 
of the sixteenth round; that is, the ciphertext is the concatenation of R16 and L16. 
Features of CAST-128: 
There are several notable features of CAST worthy of comment., 
CAST makes use of fixed S-boxes. The designers felt that fixed S-boxes with good nonlinearity 
characteristics are preferable to random S-boxes as might be obtained if the S-boxes were key 
dependent. The subkey-generation process used in CAST-128 is different from that employed in 
other symmetric encryption algorithms described in the literature.  

The CAST designers were concerned to make subkeys as resistant to known cryptanalytic attacks 
as possible and felt that the use of highly nonlinear S-boxes provided this strength. We have seen 
other approaches with the same goal.  
For example. Blowfish uses the encryption algorithm itself to generate the subkeys. 
The function F is designed to have good confusion, diffusion. and avalanche properties. It uses S-
box substitutions, mod 2 addition and subtraction, exclusive- OR operations, and key-dependent 
rotation. 
The strength of the F function is based primarily on the strength of the S-boxes, but the further use 
of these arithmetic. Boolean, and rotate operators adds to its strength. Finally, F is not uniform 
from round to round, as was described. This dependence of F on round number may provide. 
ADVANCED ENCRYPTION STANDARD 
*   The Advanced Encryption Standard (AES) was published by the National Institute of
    Standards and Technology (NIST) in 2001.
*   AES is a block cipher intended to replace DES for commercial applications.
*   It uses a 128-bit block size and a key size of 128, 192, or 256 bits.the algorithm is referred
    as AES-128,AES-192 OR AES-256
*   AES does not use a Feistel structure. Instead, each full round consists of four separate
    functions: byte substitution, permutation, arithmetic operations over a finite field, and
    XOR with a key.
*   AES parameters:
    Key size(words/bytes/bits) 4/16/128 6/24/192 8/32/256 
    Plaintext block Size (words/bytes/bits) 4/16/128 4/16/128 4/16/128 
    Number of rounds 10 12 14 
    Round Key size (words/bytes/bits) 4/16/128 4/16/128 4/16/128 
    Expanded key size (words/bytes) 44/176 52/208 60/240 
AES STRUCTURE 
General structure 
*   The input to the encryption and decryption algorithms is a single 128-bit block. , this block
    is depicted as a 4 * 4 square matrix of bytes.

*   This block is copied into the State array, which is modified at each stage of encryption or
    decryption.
*   After the final stage, State is copied to an output matrix. These operations are depicted in
    Figure 5.2a. Similarly, the key is depicted as a square matrix of bytes.
*   This key is then expanded into an array of key schedule words. Figure 5.2b shows the
    expansion for the 128-bit key. Each word is four bytes, and the total key schedule is 44
    words for the 128-bit key

The cipher consists of N rounds, where the number of rounds depends on the key length: 10 
rounds for a 16-byte key, 12 rounds for a 24-byte key, and 14 rounds for a 32-byte key (Table 
5.1).  
The first N-1 rounds consist of four distinct transformation functions: SubBytes, ShiftRows, 
MixColumns, and AddRoundKey, which are described subsequently. The final round contains 
only Three Transformations, and there is a initial single transformation (AddRoundKey) before 
the first round, 
Detailed Structure 
*   Figure 5.3 shows the AES cipher in more detail, indicating the sequence of
    transformations in each round and showing the corresponding decryption function
Four different stages are used, one of permutation and three of substitution: 
*   Substitute bytes: Uses an S-box to perform a byte-by-byte substitution of the block
*   ShiftRows: A simple permutation
*   MixColumns: A substitution that makes use of arithmetic
*   AddRoundKey: A simple bitwise XOR of the current block with a portion of the expanded key

AES TRANSORMATION FUNCTIONS 
The four transformation functions are 
*   Substitute bytes
*   ShiftRows
*   MixColumns
*   AddRoundKey
Substitute Bytes Transformation 
*   The forward substitute byte transformation, called SubBytes, is a simple table lookup
    (Figure 5.5a).
*   AES defines a16 *16 matrix of byte values, called an S-box (Table 5.2a), that contains a
    permutation of all possible 256 8-bit values.
*   Each individual byte of State is mapped into a new byte in the following way: The
    leftmost 4 bits of the byte are used as a row value and the rightmost 4 bits are used as a
    column value. These row and column values serve as indexes into the S-box to select a 
    unique 8-bit output value. For example, the hexadecimal value3 {95} references row 9, 
    column 5 of the S-box,which contain the value {2A} 
`,
  },
  {
    id: "note3",
    title: "Calculus Review",
    subject: "Calculus",
    type: "PDF",
    description: "Comprehensive review for the Calculus II midterm exam.",
    uploadedBy: { name: "Dharani", role: "Student" },
    isOfficial: false,
    content: "https://www.orimi.com/pdf-test.pdf", // Direct sample PDF
  },
  {
    id: "note4",
    title: "Data Structures",
    subject: "Algorithms",
    type: "PDF",
    description: "Quick reference for common data structures.",
    uploadedBy: { name: "D.Mounica", role: "Student" },
    isOfficial: false,
    content: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // Direct sample PDF
  },
  {
    id: "note5",
    title: "Essay Writing Tips",
    subject: "Technical Writing",
    type: "Text",
    description: "Helpful tips for structuring and writing academic essays.",
    uploadedBy: { name: "Kathy", role: "Student" },
    isOfficial: false,
    content: `
# Essay Writing Tips

## Planning Your Essay
1.  **Understand the Prompt:** Read carefully and identify keywords.
2.  **Brainstorm Ideas:** Generate as many ideas as possible.
3.  **Outline:** Structure your arguments logically.
  *   Introduction (Hook, Background, Thesis)
  *   Body Paragraphs (Topic Sentence, Evidence, Analysis)
  *   Conclusion (Restate Thesis, Summarize, Broader Implications)

## Writing the Draft
*   **Strong Thesis Statement:** Clear, concise, and arguable.
*   **Topic Sentences:** Each paragraph should start with a clear topic sentence.
*   **Evidence and Analysis:** Support claims with evidence and their relevance.
*   **Transitions:** Use transition words/phrases for smooth flow.

## Revising and Editing
*   **Content:** Is your argument clear and well-supported?
*   **Organization:** Is the essay logically structured?
*   **Clarity and Style:** Is the language precise and engaging?
*   **Grammar and Punctuation:** Proofread carefully.
`,
  },
]
