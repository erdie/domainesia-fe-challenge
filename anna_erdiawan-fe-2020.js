(
    fetch('https://domainesia-db.firebaseio.com/hosting.json')
        .then(response => response.json())
        .then(data => {
            const hostingPackage = data;
            let output = '';
            hostingPackage.forEach((item, index) => {
                if (index > 2) return
                output +=
                `<div class="package__card">
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
                                    <li>5 Website</li>
                                    <li><b>${item.email}</b> Email</li>
                                    <li>Akses ${item.access}</li>
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
            })
            document.querySelector('.package__grid').innerHTML = output
        })
    .catch(error => console.error(error))
)