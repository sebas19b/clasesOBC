//Crea un nuevo fichero JS que contenga las siguientes líneas

//- Una clase llamada "Estudiante" que tenga:
class student{
		//- Una variable llamada nombre
		//- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
		constructor(name){
			this.name = name
			this.lista = ['Javascript', ' HTML', ' CSS']
		}
		
		//const lista = ['Javascript', 'HTML', 'CSS'];
		//- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
		getDates(name, lista){
				this.name,
				this.lista
			
			console.log(`El estudiante ${this.name} tiene estas asignaturas ${this.lista}`)
		}
}

//- Crea una nueva instancia de "Estudiante"
const showDates = new student('Sebastian')

console.log(showDates)
//- Haz la llamada al método obtenDatos
showDates.getDates()