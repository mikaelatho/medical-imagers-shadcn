document.addEventListener('DOMContentLoaded', () =>{
    const flashcards = [
        { question: "What is an X-ray?", answer: "Also known as a radiograph, X-rays are the fastest form of scanning but best used for bones and alignments. While unable to scan soft tissues and smaller areas of the body, X-rays are used for fractures, misalignment, or other bone related injuries."},
        { question: "What is a CT Scan?", answer: "CT scans are much higher detailed scans of the body. They show bones and strucutre better than X-rays but use more radiation. Used best when a more detailed view is needed."},
        { question: "What is a MRI?", answer: 'An imaging technique used obtain high-detailed visuals of internal body structure. Used best for soft tissues, nerves, and other areas of the body X-rays & CT Scans do not pick up.'},
        { question: "What does the Frontal Lobe of the brain impact?", answer: 'The front area of the brain that controls function of executive functions such as planning, decision-making, and personality characteristics.'},
        { question: "What does the Parietal Lobe of the brain impact?", answer: 'The middle area behind the frontal lobe that primarly controls sense of touch and spatial awareness. This includes things such as pain, temperature, and pressure.'},
        { question: "What does the Temporal Lobe of the brain impact?", answer: 'The somewhwat lower middle area of the brain that controls hearing, language recognition, and storage of memories.'},
        { question: "What does the Occipital Lobe of the brain impact?", answer: 'The back of the brain that controls visual function and recognition of such factors such as distance, depth, and other visual vactors.'},
        { question: "What is the Cerebellum?", answer: 'Located very back of the head above the spinal cord, the Cerebellum coordinates movement, balance, and posture along with helping with motor learning like walking, running, and other things.'},
        { question: "What is the Brain Stem?", answer: 'A stalk-like structure that connects the brain to the spinal cord. It maintains important functions that you do not think about such as heart rate and breathing.'},
        { question: "What is Metastatic Disease?", answer: 'A disease when cancer cells spread from their original location, also referred to as metastasis. This is also signs of stage 4 cancer.'},
        { question: "What is Glioma?", answer: 'A tumor caused by glial cells in the brain growing out of control. Spread into 4 types, glioma can either be non-cancerous or cacnerous depending on many factors such as growth and location.'},
        { question: "What is Glioblastoma?", answer: 'The most common and aggressive type of brain cancer, Glioblastoma starts within the brain tissue itself and starts as a grade 4 tumor. It grows fast and may result in death in less than 6 months if untreated.'},
    ];

    let currentCard = 0;

    const flashcardElement = document.getElementById('flashcard');
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');

    function displayCard(){
        questionElement.textContent = flashcards[currentCard].question;
        answerElement.textContent = flashcards[currentCard].answer;
        flashcardElement.classList.remove('is-flipped');
    }

    document.getElementById('flip-card').addEventListener('click', () => {
        flashcardElement.classList.toggle('is-flipped');
    })

    document.getElementById('next-card').addEventListener('click', () => {
        currentCard = (currentCard + 1) % flashcards.length;
        displayCard();
    })

    displayCard();
});