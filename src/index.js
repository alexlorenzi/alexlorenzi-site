import { Remarkable } from 'remarkable';
import resume from './assets/cv.md';
import './styles/site.scss';

const resume_content = document.getElementById('resume');

// Link scroll to resume
document.querySelector('#link__resume').addEventListener('click', e => {
	e.preventDefault();
	resume_content.scrollIntoView();
});

// Render Resume
const md = new Remarkable('default', { html: true });
resume_content.querySelector('.content').innerHTML = md.render(resume);
