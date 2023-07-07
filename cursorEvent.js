AFRAME.registerComponent('cursorlistener' , {
    HandleMouseEnterEvents : function(){
        this.el.addEventListener('mouseenter',()=>{
            this.HandlePlacesListState();
        } )
    },
    schema: {
        selectedItemID :{default:'' , type : 'string'}
        
    },
    HandlePlacesListState : function(){
        const id = this.el.getAttribute('id')
        const placesId = ["IIT_Bombay",'IIT_Madras', 'IIT_Delhi', 'IIT_Kharagpur' ]
        if(placesId.includes(id)){
            const placesContainer = document.querySelector('#places-container')
            placesContainer.setAttribute('cursorlistener', {selectedItemID : id })
            this.el.setAttribute('material', {color : 'yellow', opacity : 1})
        }
    },
    init : function(){
        this.HandleMouseEnterEvents();
        this.HandleMouseLeaveEvents();
    },
    HandleMouseLeaveEvents : function(){
        this.el.addEventListener('mouseleave',() => {
            const {selectedItemID}  = this.data
            if(selectedItemID){
                const el = document.querySelector(`#${selectedItemID}`)
                const id = el.getAttribute("id")
                if(id == selectedItemID){
                    el.setAttribute('material', {color : '#0077CC', opacity: 1})
                }
            }
        })
    }

})