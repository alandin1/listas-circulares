class BaseCam {
    constructor(){
        this.start = null;
        this.size = 0;
    }

    agregarBase(path){
        if(this.start === null){
            this.inicio = path
            path.next = this.start
        } else {
            let bus = this.start
            while(bus.next !== this.start){
                bus = bus.next
            }
            bus.next = path
            path.next = this.start
        }
        this.size++
        return path.nombre
    }

    eliminarBase(path) {
        let bus = this.start
        if(this.size == 1 && bus.nombre === ruta){
            this.start = null
            this.size--
            let infoBus = [ path, bus.minutos]
            return infoBus
        }
        if(this.start !== null){

        }
    }
}
  
   
 