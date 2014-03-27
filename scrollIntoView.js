module.exports = function(target){
    if(!target){
        return;
    }

    var parent = target.parentNode,
        targetPosition = target.getBoundingClientRect(),
        parentOverflow;

    while(parent && parent.tagName !== 'BODY'){
        parentOverflow = window.getComputedStyle(parent).overflow;
        if(
            parentOverflow !== 'auto' ||
            parentOverflow !== 'scroll' ||
            parentOverflow !== 'scrollX' ||
            parentOverflow !== 'scrollY'
        ){
            parent.scrollTop = target.offsetTop + Math.min(targetPosition.height, parent.clientHeight) / 2;
            parent.scrollLeft = target.offsetTop + Math.min(targetPosition.width, parent.clientWidth) / 2;
        }

        parent = parent.parentNode;
    }

    window.scrollTo(
        targetPosition.left + window.scrollX - window.innerWidth / 2 + Math.min(targetPosition.width, window.innerWidth) / 2,
        targetPosition.top + window.scrollY - window.innerHeight / 2 + Math.min(targetPosition.height, window.innerHeight) / 2
    );
};