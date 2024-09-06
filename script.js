const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabContent = tab.nextElementSibling;
        tabContent.classList.toggle('show');
    });
});



const syllabusData = {
    course1: {
        title: "Cyber Security Syllabus",
        code: "CYB101",
        description: "This course provides a comprehensive introduction to the field of cyber security. Students will learn about fundamental concepts, principles, and practices necessary to protect information systems and networks. The course covers a range of topics from basic security principles to advanced techniques in threat management and mitigation.",
        objectives: ["Understand the core principles of cyber security and their application", "Identify and analyze common threats, vulnerabilities, and attacks", "Implement basic security measures to protect information systems"]
    },
    course2: {
        title: "Artificial Intelligence Syllabus",
        code: "AIC011",
        description: "This course offers an introduction to the field of Artificial Intelligence (AI), covering the fundamental concepts, techniques, and applications of AI. Students will gain a solid understanding of machine learning, neural networks, and AI-driven systems, and explore their impact on various industries and society.",
        objectives: ["Understand core AI concepts and terminology", "Develop skills to build and evaluate AI models", "Learn fundamental machine learning algorithms and techniques"]
    },
    course3: {
        title: "Computer Science Syllabus",
        code: "CS3100",
        description: "This course introduces students to the fundamental concepts and principles of computer science. It covers a broad range of topics including programming, algorithms, data structures, and the basics of computer systems. The course aims to build a solid foundation for further study in computer science and related fields.",
        objectives: ["Develop problem-solving skills through programming", "Understand basic algorithms and data structures.", "Gain knowledge of computer systems and software development"]
    }
};



document.querySelectorAll('.course-button').forEach(button => {
    button.addEventListener('click', event => {
        const syllabusId = button.dataset.syllabus;
        const syllabusContent = syllabusData[syllabusId];
        const syllabusBox = document.querySelector('.syllabus-box');

        // Clear previous syllabus content
        syllabusBox.innerHTML = '';

        
        const syllabusHTML = `
            <h2>${syllabusContent.title}</h2>
            <h3>${syllabusContent.code}</h3>
            <p>${syllabusContent.description}</p>
            <h4>Objectives:</h4>
            <ul>
                ${syllabusContent.objectives.map(objective => `<li>${objective}</li>`).join('')}
            </ul>
        `;
        syllabusBox.innerHTML = syllabusHTML;
        syllabusBox.style.display = 'block';
    });
});