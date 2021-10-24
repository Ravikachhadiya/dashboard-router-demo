export const useUserType = () => {
    const user = localStorage.getItem('user');
    // console.log(user);
    if (user?.toLowerCase() === "admin") {
        // console.log("user",user);
        return true;
    }
    return false;
}