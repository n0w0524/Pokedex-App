function captureProfile() {

    let formProfile = document.getElementById('submit');

    formProfile.onclick = (e) => {
        e.preventDefault;
        let avatar = document.getElementsByName('flexRadioAvatar');
        let pokemon = document.getElementsByName('flexRadioPokemon')
        for (let av of avatar )
        {
            if (av.checked) {
                console.log(av.id) 
                let avatarProfile = new Profile (
                    
                    )
            }
        // for (let pk of pokemon)
        //     if (pk.checked) {
        // }
    }
    }

}
