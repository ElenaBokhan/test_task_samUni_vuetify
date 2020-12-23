<template>  
    <v-card justify="center" class="ma-10 pa-0">        
            <v-toolbar
                dark
                color="blue darken-3"
                class="mb-1"
            > 
                <v-text-field
                        v-model="searchData"
                        clearable
                        flat
                        solo-inverted
                        hide-details
                        prepend-inner-icon="mdi-magnify"
                        label="Search"
                        class="ma-10 "
                        >
                </v-text-field>
            </v-toolbar >       
            <v-data-table
                :headers="headers"
                :items="content"
                :search="searchData"
                class="ma-10 pa-3"
            >        
            </v-data-table>
    </v-card>
</template>

<script>
export default {    
    data() {
        return {
            items: [],            
            url: "https://raw.githubusercontent.com/ElenaBokhan/test_task-SamUniversity/master/src/server/db/users.json",
            searchData:"",
            headers: [                
                { text: 'User Name', value: 'name' },
                { text: 'Number of posts', value: 'countPost' },
                { text: 'Last post date', value: 'dataLastPost' },               
            ],
            content:[],
        }
    },
    methods: {          
        getLastPost(el){                       
            return el.posts.map(el=> el.createdAt).sort().reverse()[0] 
        },        
        get(url) {
            return fetch(url).then(d => d.json())
        },
        getDataObj(){
            this.items.forEach(({user,posts},i,arr)=> {
                let dataUser = {
                    name: `${user.surname} ${user.name} ${user.patronymic}`,
                    countPost: posts.length,
                    dataLastPost: this.getLastPost(arr[i])
                }
                this.content = [...this.content, dataUser]
            })
        }
    },
    mounted() {
        this.get(this.url)
        .then(data => {
            this.items = data 
            this.getDataObj()          
        })   
        
    }
}
</script>

