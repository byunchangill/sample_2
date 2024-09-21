document.addEventListener('DOMContentLoaded', function() {
    const trendingContent = document.getElementById('trending-content');
    
    const trendingItems = [
        { title: '오징어 게임', image: '오징어게임.jpg' },
        { title: '킹덤', image: '킹덤.jpg' },
        { title: '스위트홈', image: '스위트홈.jpg' },
        // 추가 항목...
    ];
    
    trendingItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'trending-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
        `;
        trendingContent.appendChild(itemElement);
    });
});
