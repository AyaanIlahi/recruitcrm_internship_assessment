<template>
    <h1 class="text-bold text-xl bg-green-100">Candidates Data</h1>
    <div class="mt-2 mb-2">
        <Button label="Add Candidate" @click="visible = true" />

        <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
            <div class="flex items-center gap-4 mb-4">
                <label for="username" class="font-semibold w-24">Username</label>
                <InputText v-model="name" id="username" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex items-center gap-4 mb-8">
                <label for="email" class="font-semibold w-24">Email</label>
                <InputText v-model="email" id="email" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="number" class="font-semibold w-24">Contact No.</label>
                <InputText v-model="number" id="number" class="flex-auto" autocomplete="off" type="number" />
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="education" class="font-semibold w-24">Education</label>
                <InputText v-model="education" id="education" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex justify-end gap-2">
                <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
                <Button type="button" label="Save" @click="submitData"></Button>
            </div>
        </Dialog>
    </div>

    <hr>
    <div class="mt-2">
        <h1 class="bg-green-100 text-bold text-xl">Display Candidates</h1>
        <div>
            <DataTable :value="candidates" tableStyle="min-width: 50rem">
                <Column field="id" header="ID"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="email" header="Email"></Column>
                <Column field="number" header="Number"></Column>
                <Column field="education" header="Education"></Column>
            </DataTable>
        </div>
    </div>

    <div class="mt-5 flex">
        <h1>Filter By name : </h1>
        <InputText type="text" v-model="nameFilter" />
        <Button label="Submit" @click="searchCandidate(nameFilter)"/>
    </div>
</template>
 
<script setup lang="ts">
    import {ref } from 'vue';
    import Button from 'primevue/button';
    import InputText from 'primevue/inputtext';
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
   import Dialog from 'primevue/dialog';
   import ConfirmDialog from 'primevue/confirmdialog';
    import { useConfirm } from "primevue/useconfirm";

    const confirm = useConfirm();

    const id = ref<number>(-1);
    const name = ref<string>("");
    const email = ref<string>("");
    const number = ref<number>(0);
    const education = ref<string>("");
    const visible = ref(false);
    const nameFilter = ref<string>("");
    const showCandidate = ref<string>("");
    type Candidate = {
        id :number
        name :string,
        email :string ,
        number :number ,
        education : string
    }
    const candidates = ref<Candidate[]>([]);
    const submitData = ()=>{
        const data :Candidate ={
            id: Date.now(),
            name : name.value,
            email : email.value,
            number : number.value,
            education : education.value,
        }
        candidates.value.push(data);
        visible.value = false;
    }
    const searchCandidate = (nameFilter :string)=>{
        for(let i=0;i<candidates.value.length();i++){
            if(candidates.value[i]!.name==nameFilter){
                showCandidate=true;
            }
        }
    }
</script>