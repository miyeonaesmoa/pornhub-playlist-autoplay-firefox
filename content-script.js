const playerSelector = "video.mgp_videoElement";
const nextButtonSelector = "#nextButton"
const playerContainerSelector = "div.playerFlvContainer";

function waitForPlayer() {
    return new Promise(resolve => {
        const observer = new MutationObserver(mutations => {
            let player = document.querySelector(playerSelector);
            if (player) {
                observer.disconnect();
                resolve(player);
            }
        });

        observer.observe(document.body, {childList: true, subtree: true});
    });
}


waitForPlayer().then((player) => {
    // Trigger a click event on the next button when the end of the video is reached
    player.addEventListener('ended', () => {
        document.querySelector(nextButtonSelector).click();
    });

    // Focus on the player container to allow to control playback with keyboard without having to click on the player
    document.querySelector(playerContainerSelector).focus();
});