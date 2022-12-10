import { Cours } from './cours.model';
export class CoursWrapper {
    _embedded!: { courses: Cours[] };
}
