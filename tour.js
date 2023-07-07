AFRAME.registerComponent('tour', {
    init: function(){
        this.placesContainer = this.el
        this.createCards()
    },
    createCards:
    function(){
        const thumbnails_ref = [
            {
                id:'IIT_Bombay',
                title: 'IIT Bombay Jaunga',
                url: './assets/iit_bombbay.jpg'
            },
            
            {
                id:'IIT_Madras',
                title: 'IIT Madras Jaunga',
                url: './assets/IIT_Madras.jpg'
            },
            {
                id:'IIT_Delhi',
                title: 'IIT Delhi Jaunga',
                url: './assets/iit_delhi.png'
            },
            {
                id:'IIT_Kharagpur',
                title: 'IIT Kharagpur Jaunga',
                url: './assets/iit_kharaggpur.jpg'
            },

        ]
        let previous_x_position = -62 
        for(var item of thumbnails_ref){
            const posX = previous_x_position + 25
            const posY = 0
            const posZ = -40
            const position = {x : posX, y:posY, z:posZ}
            previous_x_position = posX
            const borderEl = this.createBorders(position, item.id)

            const thumbnails = this.createThumbnails(item)
            borderEl.appendChild(thumbnails)

            const titles = this.title(position, item)
            borderEl.appendChild(titles)

            this.placesContainer.appendChild(borderEl)
        }

    },
    createBorders : 
    function(position, id){
        const EntityEl = document.createElement('a-entity')
        EntityEl.setAttribute('id' , id)
        EntityEl.setAttribute('position' , position)
        EntityEl.setAttribute('visible' , true)
        EntityEl.setAttribute('geometry', {
            primitive: 'ring', radiusInner: 9, radiusOuter: 10
        })
        EntityEl.setAttribute('material', {
            color: '#0077CC', opacity : 1
        })

        EntityEl.setAttribute('cursorlistener', {})

        return EntityEl
    },
    createThumbnails:
    function(item){
        const EntityEl = document.createElement('a-entity')
        EntityEl.setAttribute('visible', true)
        EntityEl.setAttribute('geometry', {
            primitive: 'circle', radius : 9
        })
        EntityEl.setAttribute('material', {
            src :item.url, 
        })
        return EntityEl
    },
    title : function(position, item){
        const EntityEl = document.createElement('a-entity')
        EntityEl.setAttribute('visible', true)
        EntityEl.setAttribute('text', {font : 'exo2bold', align: 'center', color: 'black', width : 80, value: item.title}) 
        const positionEl = position
        positionEl.y = -25
        EntityEl.setAttribute('position', positionEl)
        return EntityEl
    }
})