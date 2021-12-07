var animations = [
    [ 
        {
            action: function() {
                var trevoDrop = [
                    [
                        {
                            id: '#i02',  
                            duration: 28000,  
                            delayBefore: 0,  
                            delayAfter: 0, 
                            animations: {opacity: 1, top: 500} 
                        },
                        {
                            id: '#i02-0',  
                            duration: 20000,  
                            delayBefore: 0,  
                            delayAfter: 0, 
                            animations: {opacity: 1, top: 500} 
                        },
                    ]
                ];
                var trevoAnimation = new YAnimation(trevoDrop, {loop: false, clearAfterEnd: false});
                trevoAnimation.startAnimation();
            }
        },
        {
            action: function() {
                var trevo = [
                    {
                        id: '#i02-1',  
                        duration: 5000,  
                        delayBefore: 0,  
                        delayAfter: 0, 
                        animations: {opacity: 1, top: 250} 
                    },
                    {
                        id: '#i02-2',  
                        duration: 3500,  
                        delayBefore: 0,  
                        delayAfter: 0, 
                        animations: {opacity: 1, top: 250} 
                    },
                    {
                        id: '#i02-3',  
                        duration: 3800,  
                        delayBefore: 0,  
                        delayAfter: 0, 
                        animations: {opacity: 1, top: 250} 
                    },
                ];
                var trevoAnimationUnico = new YAnimation(trevo, {loop: false, clearAfterEnd: false});
                trevoAnimationUnico.startAnimation();
            }
        }
    ],
    {
        id: '#i03',  
        duration: 500,  
        delayBefore: 500,  
        delayAfter: 0, 
        animations: {opacity: 1, top: 0} 
    },
    {
        id: '#i04',  
        duration: 300,  
        delayBefore: 0,  
        delayAfter: 0, 
        animations: {opacity: 1, scale:[1, 0.1]} 
    },
    {
        id: '#i05',  
        duration: 300,  
        delayBefore: 0,  
        delayAfter: 0, 
        animations: {opacity: 1, scale:[1, 0.1]}  
    },
    {
        id: '#i06',  
        duration: 700,  
        delayBefore: 0,  
        delayAfter: 0, 
        animations: {opacity: 1} 
    },
    {
        id: '#i07',  
        duration: 700,  
        delayBefore: 0,  
        delayAfter: 0, 
        animations: {opacity: 1} 
    },
    // {
    //     id: '#i06',  
    //     duration: 500,  
    //     delayBefore: 0,  
    //     delayAfter: 0, 
    //     animations: {opacity: 0} 
    // },
    // {
    //     id: '#i08',  
    //     duration: 700,  
    //     delayBefore: 0,  
    //     delayAfter: 0, 
    //     animations: {opacity: 1} 
    // },
    {
        id: '#i09',  
        duration: 500,  
        delayBefore: 0,  
        delayAfter: 0, 
        animations: {opacity: 1, left: 0} 
    },
    {
        id: '#i10',  
        duration: 700,  
        delayBefore: 0,  
        delayAfter: 0, 
        animations: {opacity: 1} 
    },
]

new YAnimation(animations, {loop: false, clearAfterEnd: false}).startAnimation()