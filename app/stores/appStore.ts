export const useAppStore = defineStore('appStore', () => {
    const themeColor = ref('light');
    const cartStateBase64 = ref('')
    function changeTheme() {
        themeColor.value == 'dark' ? themeColor.value = 'light' : themeColor.value = 'dark';
    }
    return { themeColor, changeTheme }
})
