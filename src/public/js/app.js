Quasar.iconSet.set(Quasar.iconSet.mdi);
Vue.prototype.$axios = axios

new Vue({
    el: "#q-app",
    data: function () {
        return {
            color: 'positive',
            data: [],
            error: false,
            message: '',
            loading: false,
            options: [
                { value: '1', label: 'Task-1 Sync' },
                { value: '2', label: 'Task-2 Sync' },
                { value: '3-1', label: 'Task-3: Task-1 Async ' },
                { value: '3-2', label: 'Task-3: Task-2 Async' },
                { value: '4-1', label: 'Task-4: Task-2 Sync with Errors' },
                { value: '4-2', label: 'Task-4: Task-2 Async with Errors' },
                { value: 'bonus', label: 'Bonus Task' },
            ],
            taskID: ''
        };
    },
    methods: {
        onClick () {
            this.data = []
            this.loading = true
            this.fetchData(this.taskID).then(res => {
                this.error = false
                this.data = res.data
            }).catch(err => {
                this.error = true
                this.message = res.data
            }).finally(() => this.loading = false)
        },
        fetchData (id) {
            return this.$axios.get(`/api/task/${id}`)
        }
    }
});