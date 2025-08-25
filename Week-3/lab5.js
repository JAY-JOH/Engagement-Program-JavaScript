function createStudent(name, grades = []) {
  return {
    name: name,
    grades: grades,
    getAverage: function() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((total, grade) => total + grade);
        return sum / this.grades.length;
    }  
  };
}
