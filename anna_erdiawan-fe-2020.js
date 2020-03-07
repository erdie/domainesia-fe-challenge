fetch('https://domainesia-db.firebaseio.com/hosting/personal.json')
    .then(response => response.json())
    .then(data => {
        const hostingPackage = data
        let output = ''

        // Looping for Cards
        hostingPackage.forEach((item) => {
            return output += showCard(item)
        })
        document.querySelector('.package__grid').innerHTML = output

        // Showing data from API to Cards element
        function showCard(item) {
            return `<div class="package__card">
                        <div class="package__wrapper">
                            <div class="package__content">
                                <h3 class="package__name">${item.package}</h3>
                                <img class="package__image" src="./assets/illustrations/data-visualization.svg" alt="">
                                <div class="package__price">
                                    <h4>Rp ${item.price}</h4>
                                    <p>Perbulan</p>
                                </div>
                                <div class="package__description">
                                    <ul>
                                        <li><b>${item.storage}</b> Space</li>
                                        <li><b>${item.bandwidth}</b> Bandwidth</li>
                                        <li><b>${item.website}</b> Website</li>
                                        <li><b>${item.email}</b> Email</li>
                                        <li class=".some-element">Domain ${item.domain}!</li>
                                        <li class=".some-element">Akses ${item.access}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="package__order">
                                <button class="button button--secondary">
                                    Pesan
                                </button>
                            </div>
                        </div>
                    </div>`
                }

        // Remove element with null or undefined object 
        hostingPackage.filter((item) => {
            const elem = document.querySelector('.some-element')
            if (item === 'null'){
                elem.style.display = 'none'
            }
        })
    })
.catch(error => console.error(error))