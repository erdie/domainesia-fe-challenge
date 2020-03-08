const rootURL = 'https://domainesia-db.firebaseio.com/hosting/'

// Fetch the API for Hosting Personal package
fetch(rootURL + 'personal.json')
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
                                        <li id="hide-domain-element">Domain ${item.domain}!</li>
                                        <li id="hide-access-element">Akses ${item.access}</li>
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
        
        // remove element if some object undefined
        if (hostingPackage.domain === undefined || hostingPackage.access === undefined) {
            // document.getElementById('hide-domain-element hide-access-element').style.display = 'none';
            console.log('Object Domain '+hostingPackage.domain)
        }
    })
.catch(error => console.error(error))


// Fetch the API for Hosting Business package
fetch(rootURL + 'business.json')
    .then(response => response.json())
    .then(data => {
        const hostingPackage = data
        let output = ''

        // Looping for Cards
        hostingPackage.forEach((item) => {
            return output += showCard(item)
        })
        document.querySelector('.package-business__grid').innerHTML = output

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
                                        <li><b>${item.cpu}</b> CPU</li>
                                        <li><b>${item.memory}</b> RAM</li>
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
    })
.catch(error => console.error(error))