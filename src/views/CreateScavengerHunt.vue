<template>
<div>
   <app-header />
   <h4>Create Scavenger Hunt</h4>

<div id="container">
  <hr />
<!-- 
  <div class="row" v-for="row in rows">
    <div class="input-field col s12 m12 l12">
      <input type="text" value="{{row.full_name}}">
    </div>
  </div> -->
  <div class="my-2">
    <v-btn large v-on:click="addItem">Add Item</v-btn>
  </div>
 <div class="my-2">
    <v-btn large color="primary" v-on="saveItems">Save Scavenger Hunt</v-btn>
  </div>
    
  
</div>
</div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue"
export default {
    name: "CreateScavengerHunt",
    components:{ AppHeader },
    data: function () {
    return {
      huntItems:[],
        }
    }
}
</script>