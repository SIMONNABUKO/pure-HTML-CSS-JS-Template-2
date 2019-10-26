//show and hide the .portfolio-item-content class div in portfolio id
//DOM selection
const portfolioItems = document.querySelectorAll('.portfolio-item');
const portfolioItemContents = document.querySelectorAll(
    '.portfolio-item-content',
);

for (portfolioItem of portfolioItems) {
    portfolioItem.addEventListener('hover', () => {
        let showPortfolioItemContentDiv = false;
        if (!showPortfolioItemContentDiv) {
            portfolioItemContents.forEach(portfolioItemContent, () => {
                portfolioItemContent.classList.add('show');
            });
            showPortfolioItemContentDiv = true;
        } else {
            portfolioItemContents.forEach(portfolioItemContent, () => {
                portfolioItemContent.classList.remove('show');
            });
            showPortfolioItemContentDiv = false;
        }
    });
    console.log(`   This script is working great!`);
}