
var rsr = Raphael('peta', '765', '990');

// buat bariabel berisi array daerah-daerah di banjarmasin
var daerah =[];

// deklarasi  variable
var $map = $('#peta');
// deklarasi 
var $infobox = $('.infobox');

var layer1 = rsr.set();

// banjarmasin
var banjarmasin = rsr.path("m 127.9375,642.46875 -1.96875,10.84375 -3.1875,6.9375 1.25,2.0625 -0.75,4.40625 -6.34375,0.4375 14.21875,7.5625 3.71875,-4.625 6,0.40625 1.34375,-4.625 7.03125,-4.9375 -6.71875,-4.53125 -0.28125,-3.59375 0.875,-6 -4.25,-1.15625 -2.5,2.0625 -2.75,-3.21875 -4.59375,-0.0313 z m -6.09375,20.21875 -3.89408,2.90952 4.00854,-0.40788 z").attr({id: 'path154',parent: 'layer1',"font-size": '54.16669846px',"font-style": 'normal',"font-weight": '400',fill: '#b0000f',"fill-opacity": '0.94117647',"fill-rule": 'evenodd',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'square',"stroke-linejoin": 'bevel',"stroke-miterlimit": '4',"stroke-opacity": '1',"stroke-dasharray": 'none',"font-family": 'Lucida Grande'}).transform("t0,-62.362183 t0,62.362183")
	.data({'id': 'banjarmasin','daerah': 'Banjarmasin'});
daerah.push(banjarmasin)

// marabahan
var marabahan = rsr.path("M 212.9375 422.65625 L 205.09375 434.1875 L 193.46875 443.875 L 191.28125 468.5625 L 183.40625 481.1875 L 170.6875 487.25 L 159.6875 486.46875 L 156.4375 491.875 L 159.15625 497.875 L 154.25 505.28125 L 131.90625 510.53125 L 130.84375 516.90625 L 106.65625 557 L 103.9375 566.03125 L 120.6875 582.9375 L 86.78125 614.40625 L 92.5 624.875 L 89.375 627.5 L 90.21875 630.84375 L 72.78125 644.53125 L 69.3125 657.59375 L 62.5 666.5 L 65.4375 678.375 L 61.78125 687.78125 L 63.8125 699.1875 L 66.9375 698.78125 L 67.34375 700.8125 L 88.46875 710.78125 L 101.84375 710.25 L 107.0625 693.96875 L 104.40625 685.1875 L 106.15625 676.65625 L 112.75 666.3125 L 115.6875 665.90625 L 121.6875 658.3125 L 123.1875 648.15625 L 120.59375 638.03125 L 125.28125 638.28125 L 129.21875 644.25 L 133.71875 644.5625 L 136.0625 647.625 L 139.0625 645.625 L 142.96875 646.84375 L 178.5625 633.65625 L 183.03125 630.1875 L 188.5625 630.1875 L 191.75 622.46875 L 193.9375 624.21875 L 201.03125 621.6875 L 202.90625 613.9375 L 202.53125 568.0625 L 195.875 556.28125 L 195.4375 547.40625 L 199.03125 544.5 L 206.5 527.375 L 197.71875 507.1875 L 195.6875 489 L 212.9375 422.65625 z M 125.0625 638.40625 L 123.59375 638.8125 L 125.625 646.28125 L 125.0625 638.40625 z M 107.53125 680.15625 L 106.25 685.90625 L 108.125 690.03125 L 108.625 682.5625 L 107.53125 680.15625 z M 110.0625 686.53125 L 111.125 693.6875 L 111.65625 692.09375 L 110.0625 686.53125 z ").attr({id: 'path178',parent: 'layer1',"font-size": '54.16669845999999922px',"font-style": 'normal',"font-weight": '400',fill: '#fefee9',"fill-opacity": '1',"fill-rule": 'evenodd',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'square',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"font-family": 'Lucida Grande',"stroke-miterlimit": '4',"stroke-dasharray": 'none'}).transform("t0,-62.362183 t0,62.362183")
	.data({'id': 'marabahan','daerah':'Marabahan', 'kabupaten':'Barito Kuala'});

daerah.push(marabahan)

// kotabaru
var kotabaru = rsr.path("M 620.46875 625.53125 L 587.9375 649.625 L 587.03125 652.53125 L 582.28125 651.03125 L 579.78125 653 L 577.34375 663.90625 L 574.71875 665.96875 L 577.0625 667.34375 L 566.59375 691.625 L 557.84375 703.90625 L 559.375 723.21875 L 556.125 735.0625 L 548.59375 742.90625 L 546.75 750.9375 L 549.25 751.4375 L 547.71875 763.5 L 553.09375 777.375 L 567.21875 796.625 L 569.9375 806.75 L 568.53125 811.53125 L 564.34375 812.375 L 565 825.875 L 562.71875 828.40625 L 567.65625 830.09375 L 568.6875 836.46875 L 566.03125 838.375 L 560.65625 853.5625 L 562.25 859.15625 L 560.46875 861.15625 L 558.96875 859.9375 L 557.3125 863.40625 L 560.3125 866.9375 L 560.25 874.84375 L 562.6875 868.65625 L 565.90625 867.375 L 567.65625 871.1875 L 571.46875 871.34375 L 570.84375 873.28125 L 572.65625 871.59375 L 573.96875 873.78125 L 570.46875 877.375 L 573.875 877.59375 L 572.5 881.375 L 577.96875 866.90625 L 581.875 864.40625 L 588.09375 866.875 L 595.59375 856.625 L 602.5625 852.15625 L 607.4375 852.3125 L 605.40625 848 L 607.0625 842.125 L 617.96875 839.09375 L 626.09375 829.46875 L 631.53125 832.71875 L 636.8125 832.21875 L 635.09375 823.90625 L 639.0625 817.03125 L 634.4375 817.625 L 632.1875 814.21875 L 638.09375 810.90625 L 639.8125 802.90625 L 631.78125 811.375 L 625.5 802.78125 L 627.21875 797.625 L 638.1875 790.15625 L 645.28125 777.03125 L 638.09375 777 L 634.34375 773.3125 L 635.1875 764.125 L 632.75 762.15625 L 634.15625 751.125 L 630.75 743.5625 L 635.75 736.59375 L 625.4375 722.71875 L 626.4375 716.9375 L 631.40625 712.1875 L 637.8125 711.75 L 638.03125 702.6875 L 635.21875 693.71875 L 621.03125 679.4375 L 618.75 672.1875 L 623.53125 659 L 626.53125 641.5 L 625 636.4375 L 628.25 626.28125 L 626.1875 628.53125 L 620.46875 625.53125 z M 666.34375 669.5 L 660.53125 684.34375 L 647.15625 695.90625 L 637.625 725.84375 L 650.4375 730 L 646.5625 730.875 L 648.5 739.65625 L 643.375 736.9375 L 645.4375 744.78125 L 648.625 740.1875 L 651.8125 754.71875 L 657.59375 754.34375 L 659.25 747.625 L 662.9375 747.28125 L 665.03125 720.28125 L 673.28125 687.59375 L 672.4375 671.46875 L 666.34375 669.5 z M 603.375 864.09375 L 606.375 868.03125 L 608 864.8125 L 603.375 864.09375 z M 598.875 869.9375 L 595.40625 870.25 L 593.375 873.53125 L 598.875 869.9375 z M 604.90625 882.34375 L 606.3125 886.25 L 607.75 883 L 604.90625 882.34375 z ").attr({id: 'path60',parent: 'layer1',"font-size": '54.16669845999999922px',"font-style": 'normal',"font-weight": '400',fill: '#fefee9',"fill-opacity": '1',"fill-rule": 'evenodd',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'square',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"font-family": 'Lucida Grande',"stroke-miterlimit": '4',"stroke-dasharray": 'none'}).transform("t0,-62.362183 t0,62.362183").data('id', 'path60');
daerah.push(kotabaru)

// batulicin
var batulicin = rsr.path("M 401.3125 569.65625 L 401.65625 575.28125 L 396.0625 590.46875 L 374.4375 609.65625 L 373.0625 632.34375 L 363.53125 637.09375 L 361 641.9375 L 369.125 649 L 382.3125 646.84375 L 386.71875 650.4375 L 385.4375 656.65625 L 387.53125 662.09375 L 380.78125 666.375 L 376.5625 691.25 L 371.5 696.0625 L 375.03125 706.34375 L 365.25 713.34375 L 350.78125 716.1875 L 338.1875 730.6875 L 330.21875 734.65625 L 336.125 750.625 L 335.65625 763.09375 L 339.09375 768.1875 L 348.5 768.6875 L 350.40625 771.8125 L 348.1875 783.6875 L 353.1875 788.53125 L 346.6875 800.75 L 350.625 806.1875 L 363.65625 808.78125 L 363.71875 815.375 L 392.625 801.71875 L 396.125 802.28125 L 408.15625 795.625 L 430.34375 788.9375 L 446.9375 780.75 L 445.8125 779.59375 L 462.90625 777.84375 L 468 771.53125 L 483.75 762.375 L 486.9375 755.90625 L 492.25 751.46875 L 505.3125 746 L 536.3125 742.125 L 544.15625 730.84375 L 543.90625 715.09375 L 550.28125 703.625 L 548.21875 690.5625 L 552.8125 683.8125 L 555.03125 670.40625 L 561.0625 665.78125 L 570.96875 647 L 570.65625 638.6875 L 560.09375 638.9375 L 555.4375 634.90625 L 545.34375 634.34375 L 540.5625 628.71875 L 534.9375 626.75 L 535.625 608.25 L 532.21875 609.65625 L 525.28125 607.21875 L 504.875 611.3125 L 495.0625 617.09375 L 485.59375 615.84375 L 476.9375 618.65625 L 468.53125 605.0625 L 467.40625 598.0625 L 461.84375 596.3125 L 463.09375 591.84375 L 460 590.28125 L 461.84375 588.875 L 459.25 585.8125 L 455.15625 586.25 L 453.125 583.96875 L 451.9375 587.5625 L 447.5625 582.1875 L 443.84375 583.625 L 440 579.375 L 436.3125 582.875 L 429.71875 580.6875 L 419.25 583.03125 L 416.75 576.65625 L 411.625 575.96875 L 401.3125 569.65625 z M 566.8125 665.5625 L 562.96875 667.0625 L 561.65625 674.3125 L 563.65625 675.96875 L 566.28125 674.1875 L 566.8125 665.5625 z M 559.34375 668.3125 L 555.5 670.625 L 554.03125 682.21875 L 556.5625 680.03125 L 559.34375 668.3125 z M 557.0625 686.5625 L 550.75 691.15625 L 553.6875 697.53125 L 556.125 694.90625 L 557.0625 686.5625 z ").attr({id: 'path100',parent: 'layer1',"font-size": '54.16669845999999922px',"font-style": 'normal',"font-weight": '400',fill: '#fefee9',"fill-opacity": '1',"fill-rule": 'evenodd',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'square',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"font-family": 'Lucida Grande',"stroke-miterlimit": '4',"stroke-dasharray": 'none'}).transform("t0,-62.362183 t0,62.362183").data('id', 'path100');
daerah.push(batulicin)

// kotabaru
var kotabaru = rsr.path("M 535.53125 356.125 L 534.25 364.0625 L 526.6875 365.53125 L 521.96875 371.34375 L 515.5 369.5625 L 513.28125 381.5 L 508.9375 380.75 L 502.6875 386.71875 L 497.8125 383.71875 L 495.6875 388.03125 L 492.21875 388.34375 L 487.09375 393.75 L 484.96875 392.8125 L 482.78125 399.34375 L 485.71875 414.1875 L 482.09375 421.375 L 473.65625 427.375 L 467.21875 442.625 L 458.8125 447.84375 L 453.875 444.625 L 451.21875 448.8125 L 466.25 457.5625 L 460.6875 466.34375 L 461.03125 473.46875 L 456.46875 477.6875 L 449.28125 479.6875 L 435.625 478.9375 L 428.21875 481.6875 L 425.5625 495.59375 L 416.28125 512.34375 L 423.6875 522.46875 L 430.5 527.59375 L 431.46875 531.25 L 425.71875 536.5 L 425.3125 545.1875 L 414.84375 546.03125 L 408.75 558.53125 L 401.375 564.65625 L 401.3125 569.65625 L 411.625 575.96875 L 416.75 576.65625 L 419.25 583.03125 L 429.71875 580.6875 L 436.3125 582.875 L 440 579.375 L 443.84375 583.625 L 447.5625 582.1875 L 451.9375 587.5625 L 453.125 583.96875 L 455.15625 586.25 L 459.28125 585.84375 L 461.84375 588.875 L 460 590.28125 L 463.09375 591.84375 L 461.84375 596.3125 L 467.40625 598.03125 L 468.5625 605.09375 L 478.375 619.5 L 485.59375 615.875 L 495.8125 616.9375 L 500 612.6875 L 525.28125 607.21875 L 532.21875 609.65625 L 535.625 608.25 L 534.9375 626.75 L 540.5625 628.71875 L 545.34375 634.34375 L 555.4375 634.90625 L 560.09375 638.9375 L 570.28125 638.34375 L 571.15625 645.375 L 577.59375 646.65625 L 577.75 644.6875 L 597.75 637.03125 L 599.65625 630.4375 L 595.125 615 L 596.9375 610 L 599.21875 610.53125 L 607.84375 600.6875 L 626.40625 601.34375 L 624.90625 596.28125 L 609.71875 590 L 608.03125 586.375 L 600.34375 582.6875 L 596.125 582.71875 L 594.1875 575.125 L 596.625 573.21875 L 597.53125 562.65625 L 589.21875 560.3125 L 585.625 556.125 L 578.90625 562.84375 L 570.65625 561.53125 L 581.875 552.59375 L 576.78125 548.71875 L 575.71875 544.03125 L 576.75 539.28125 L 584.375 531.125 L 582.09375 524.4375 L 592.75 525.84375 L 592.4375 527.875 L 591.09375 526.25 L 591.28125 533.59375 L 606.0625 544.9375 L 608.3125 563.5625 L 611.75 565.375 L 624.25 564.75 L 638.4375 548.375 L 645.25 534.75 L 652.59375 528 L 651.53125 522.46875 L 655.0625 505.78125 L 651.3125 492.96875 L 654.1875 463.65625 L 667.6875 439.8125 L 660.875 442.25 L 656.90625 436.84375 L 651.3125 435.59375 L 650.5625 431.5625 L 641.1875 440.84375 L 640.46875 432.40625 L 637.21875 427.125 L 644.8125 426.96875 L 649.34375 422.375 L 662.8125 425.375 L 668.84375 417.28125 L 677.90625 417.625 L 685.625 421.0625 L 686.875 437.78125 L 696.15625 435.0625 L 701.65625 427.75 L 699.40625 421.75 L 708.375 392.75 L 687.3125 383.0625 L 659.0625 376.0625 L 617.46875 376.46875 L 604.03125 368.71875 L 550.84375 367.21875 L 535.53125 356.125 z M 590.21875 534.21875 L 588.375 538.90625 L 589.78125 544.59375 L 598.75 548.65625 L 605.59375 546.8125 L 601.0625 542.375 L 597.25 543.3125 L 598.8125 542.21875 L 595.59375 537.65625 L 590.21875 534.21875 z M 597.3125 574.3125 L 595.09375 575.6875 L 597.875 581.25 L 600.65625 576.21875 L 597.3125 574.3125 z M 627.21875 587 L 625.78125 589.6875 L 627.53125 590.84375 L 627.21875 587 z ").attr({id: 'path116',parent: 'layer1',"font-size": '54.16669845999999922px',"font-style": 'normal',"font-weight": '400',fill: '#fefee9',"fill-opacity": '1',"fill-rule": 'evenodd',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'square',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"font-family": 'Lucida Grande',"stroke-miterlimit": '4',"stroke-dasharray": 'none'}).transform("t0,-62.362183 t0,62.362183").data('id', 'path116');
daerah.push(kotabaru)

// pelaihari
var pelaihari = rsr.path("m 182.2726,777.34149 14.71389,2.67546 1.03586,4.3405 9.96476,3.26654 3.29827,5.1603 4.09899,-4.34049 3.33008,0.55921 0.99137,-2.71994 7.61973,-2.67546 4.48669,4.20702 1.00412,3.52069 -4.06723,3.83852 -1.39178,10.03459 12.91347,4.17529 1.98914,3.37454 -10.39686,17.81329 0.54015,7.31467 4.48669,3.74313 3.76855,-0.80712 5.40181,-7.66421 5.22383,0.53385 11.25483,-6.23431 11.78867,-3.24108 11.21665,-8.71919 10.81637,-1.32822 10.49855,-7.33372 13.77779,-2.07813 9.59614,-7.73407 5.90386,15.97026 -0.48934,12.47498 3.43173,5.08404 9.43088,0.48301 1.90017,3.12668 -2.21156,11.87763 4.98875,4.85523 -6.51397,12.20174 3.94649,5.43995 13.03428,2.61191 0.07,6.57754 -103.44139,42.57891 -91.68516,48.06334 -11.53888,2.96143 -12.98528,-2.69453 -2.7918,-2.56743 3.07077,-3.38093 -1.47689,-24.41614 3.0148,-1.00411 1.00477,-7.77223 -8.31815,-43.04282 -1.9275,-25.42026 1.94019,-16.53588 3.1445,-5.52254 0.0712,-15.97032 -5.09171,-15.1695 -13.25156,-19.06521 -11.97298,-3.36183 62.0801,-10.14906 8.70326,2.08448").attr({id: 'path148',parent: 'layer1',"font-size": '54.16669845999999922px',"font-style": 'normal',"font-weight": '400',fill: '#fefee9',"fill-opacity": '1',"fill-rule": 'evenodd',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'square',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"font-family": 'Lucida Grande',"stroke-miterlimit": '4',"stroke-dasharray": 'none'}).transform("t0,-62.362183").data('id', 'path148');
daerah.push(pelaihari)

// rantau
var rantau = rsr.path("m 328.52997,595.27842 3.19658,1.2755 4.39135,9.7086 4.30873,1.13692 2.16073,-2.91698 3.46988,0.38195 1.49342,3.1108 7.16852,0.72957 10.62566,-6.73447 0.83884,-2.63416 -2.87882,-2.70411 2.24968,-4.17525 9.58979,3.2919 6.13902,-2.49818 2.23697,1.35301 5.00146,-4.87939 14.64204,1.19217 -2.14803,7.62738 -5.54795,4.03609 -2.30688,7.41889 -4.09269,0.59611 -8.29967,9.6165 -6.68552,1.89634 -4.26426,4.39452 -2.82167,-5.70874 -10.5621,1.28242 -3.41269,-5.16282 -6.27241,1.36571 -1.83026,3.49335 -12.10643,5.68017 -9.11949,11.67616 -7.07958,-1.7896 -4.4549,9.73659 -9.52623,11.73781 20.90181,5.64331 -0.63552,8.52214 -9.96474,9.8694 -1.37267,4.0609 -30.26278,-7.07317 -78.75201,-50.34863 -6.67282,-10.85257 -0.44486,-8.86087 3.60334,-2.90741 7.45448,-17.12247 -8.77634,-20.18433 -2.00816,-18.20342 17.27307,-66.39454 37.32962,67.94133 10.44135,9.67622 14.67386,2.58018 -3.95919,15.06215 1.88106,2.14227 7.68327,-5.13997 35.62653,13.18419 4.58833,-1.49974 7.28928,6.37027").attr({id: 'path150',parent: 'layer1',"font-size": '54.16669845999999922px',"font-style": 'normal',"font-weight": '400',fill: '#fefee9',"fill-opacity": '1',"fill-rule": 'evenodd',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'square',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"font-family": 'Lucida Grande',"stroke-miterlimit": '4',"stroke-dasharray": 'none'}).transform("t0,-62.362183").data('id', 'path150');
daerah.push(rantau)

// banjarbaru
var banjarbaru = rsr.path("m 182.2726,777.34149 -8.70324,-2.08448 -23.58176,4.53755 19.73186,-45.07015 19.77442,8.83988 26.11297,3.67959 7.82941,6.04367 6.78722,25.1216 -4.50576,6.533 -5.98645,1.32817 -1.04226,2.73907 -3.30464,-0.56559 -3.57787,4.37863 -3.84478,-5.21114 -9.89487,-3.20934 -1.08036,-4.385 -14.71389,-2.67546").attr({id: 'path152',parent: 'layer1',"font-size": '54.16669845999999922px',"font-style": 'normal',"font-weight": '400',fill: '#fefee9',"fill-opacity": '1',"fill-rule": 'evenodd',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'square',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"font-family": 'Lucida Grande',"stroke-miterlimit": '4',"stroke-dasharray": 'none'}).transform("t0,-62.362183").data('id', 'path152');
daerah.push(banjarbaru)

// kandangan
var kandangan = rsr.path("m 267.77556,482.29175 33.98052,12.34472 -1.91925,17.91365 3.92744,8.10398 4.53754,-1.16171 6.32327,4.83939 7.05411,16.37381 10.35875,5.61915 4.09905,5.80663 6.65372,-0.77725 0.29234,2.45813 12.31613,6.60487 1.55697,3.24678 17.90223,-0.27008 5.5289,-2.05143 2.03998,1.965 17.01251,-19.85323 12.74824,2.767 12.01742,-5.10947 4.00368,2.93285 -7.86117,26.22862 -17.18412,20.64314 -14.64204,-1.19217 -5.00146,4.87939 -2.23697,-1.35301 -6.13902,2.49818 -9.58979,-3.2919 -2.24968,4.17525 2.87882,2.70411 -0.83884,2.63416 -10.62566,6.73447 -7.16852,-0.72957 -1.49342,-3.1108 -3.46988,-0.38195 -2.16073,2.91698 -4.30873,-1.13692 -4.39135,-9.7086 -10.48586,-7.64577 -4.58833,1.49974 -35.62653,-13.18419 -7.68327,5.13997 -1.88106,-2.14227 3.95919,-15.06215 -14.67386,-2.58018 -10.44135,-9.67622 -36.01417,-65.73803 6.45678,-3.76539 8.47128,1.86396 9.73595,-6.7656 8.90983,-2.76764 19.91041,6.5616").attr({id: 'path162',parent: 'layer1',"font-size": '54.16669845999999922px',"font-style": 'normal',"font-weight": '400',fill: '#fefee9',"fill-opacity": '1',"fill-rule": 'evenodd',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'square',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"font-family": 'Lucida Grande',"stroke-miterlimit": '4',"stroke-dasharray": 'none'}).transform("t0,-62.362183").data('id', 'path162');
daerah.push(kandangan)

// amuntai
var amuntai = rsr.path("m 350.03547,468.03861 1.84298,4.68877 -12.36057,10.70765 -14.43234,8.22981 -10.3397,2.72823 -20.49511,-1.23543 -42.98565,-17.32708 -11.52806,2.30752 -10.51765,7.12531 -8.47128,-1.86396 -5.64331,3.7959 -2.12892,-2.23381 1.86836,-5.29631 -2.12257,-7.33057 3.14574,-4.20386 8.57297,-2.57255 6.71097,4.93788 13.17405,-2.97353 4.31509,-6.29342 9.12583,-5.04084 5.0523,-16.91209 29.94506,-22.83818 13.54263,11.1938 19.15421,9.47857 27.15516,-3.2525 -5.97375,5.56259 -5.65602,0.49568 -0.96596,11.40035 6.43767,5.45581 0.11449,5.75135 3.46348,5.51491").attr({id: 'path164',parent: 'layer1',"font-size": '54.16669845999999922px',"font-style": 'normal',"font-weight": '400',fill: '#fefee9',"fill-opacity": '1',"fill-rule": 'evenodd',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'square',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"font-family": 'Lucida Grande',"stroke-miterlimit": '4',"stroke-dasharray": 'none'}).transform("t0,-62.362183").data('id', 'path164');
daerah.push(amuntai)

// barabai
var barabai = rsr.path("m 357.3184,476.15403 2.43399,6.8603 2.55472,0.82233 3.74313,-1.3803 5.61156,-11.26691 6.62195,0.35145 7.70869,-3.04217 15.15045,5.66491 5.71957,7.4316 18.89999,9.41248 6.08815,10.80616 20.74926,3.28239 -0.6355,6.89778 14.55309,8.75283 -5.83396,7.95463 0.35591,7.13737 -4.5566,4.20388 -10.28886,2.4594 -10.55576,-1.20109 -7.42907,2.74347 -6.0055,-3.30144 -10.0156,5.47806 -12.74824,-2.767 -17.01251,19.85323 -2.03998,-1.965 -5.5289,2.05143 -17.90223,0.27008 -1.55697,-3.24678 -12.31613,-6.60487 -0.29234,-2.45813 -6.65372,0.77725 -4.09905,-5.80663 -10.35875,-5.61915 -8.85257,-18.28606 -4.52481,-2.92714 -4.53754,1.16171 -3.92744,-8.10398 1.91925,-17.91365 23.32946,-2.97163 14.43234,-8.22981 12.36057,-10.70765 3.89569,0.3025 1.54426,3.12415").attr({id: 'path166',parent: 'layer1',"font-size": '54.16669845999999922px',"font-style": 'normal',"font-weight": '400',fill: '#fefee9',"fill-opacity": '1',"fill-rule": 'evenodd',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'square',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"font-family": 'Lucida Grande',"stroke-miterlimit": '4',"stroke-dasharray": 'none'}).transform("t0,-62.362183").data('id', 'path166');
daerah.push(barabai)

// paringin
var paringin = rsr.path("m 350.03547,468.03861 -3.46348,-5.51491 -0.11436,-5.75135 -6.06271,-3.81748 0.59101,-13.03868 7.09221,-1.24622 16.89812,-15.4854 18.44244,-11.96085 7.88664,-2.42129 8.12172,-13.05202 19.33849,-8.90091 3.04409,-8.67847 9.4881,2.02282 3.66688,-1.29072 18.23269,-23.81624 5.1984,-25.75072 8.43318,4.75867 -6.58388,7.63435 0.85162,3.29002 4.31509,0.74607 3.03132,3.84991 15.65256,-1.90144 8.24249,3.60839 -1.41716,8.43954 -5.93561,3.58489 -0.40676,20.88147 -2.69452,6.45801 1.56972,5.93117 6.5965,7.97625 -1.56966,5.78884 4.1181,8.44714 5.42084,2.22363 -5.89116,6.80309 3.45079,4.66655 -1.1439,5.23021 3.38728,8.32195 -2.14167,4.32208 -3.46988,0.3133 -5.10946,5.40181 -2.12893,-0.92783 -2.19886,6.51647 2.72631,15.89528 -4.01002,6.79548 -7.84854,5.34969 -3.76854,11.80199 -6.12626,6.35506 -5.73865,2.30499 -5.99917,-5.43677 -12.19536,-0.27707 -7.96288,-2.67548 -6.08817,-10.80616 -18.89998,-9.41248 -5.71957,-7.4316 -13.92394,-5.3211 -16.68837,2.72441 -4.48035,10.88941 -3.74313,1.3803 -2.55472,-0.82233 -3.97823,-9.98445 -3.89569,-0.3025 -1.84298,-4.68877").attr({id: 'path168',parent: 'layer1',"font-size": '54.16669845999999922px',"font-style": 'normal',"font-weight": '400',fill: '#fefee9',"fill-opacity": '1',"fill-rule": 'evenodd',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'square',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"font-family": 'Lucida Grande',"stroke-miterlimit": '4',"stroke-dasharray": 'none'}).transform("t0,-62.362183").data('id', 'path168');
daerah.push(paringin)

// martapura
var martapura = rsr.path("m 169.71946,734.72441 -19.73186,45.07015 -39.62633,5.3128 2.1639,-15.2013 -1.52587,-6.22797 2.37107,-3.20932 -3.66558,-17.48914 6.34742,-12.81176 15.09329,6.9079 3.73233,-4.61373 5.99663,0.40035 1.34409,-4.62015 7.04271,-4.95061 -7.05411,-5.29374 0.9024,-8.82085 2.3094,-2.16707 27.21748,-8.64923 12.45463,-6.50755 3.33644,0.76259 3.21503,-7.73413 2.28719,1.69683 7.10497,-2.53568 1.86837,-7.73413 -0.35591,-46.82154 78.75201,50.34863 30.26278,7.07317 1.37267,-4.0609 9.96474,-9.8694 0.63552,-8.52214 -20.90181,-5.64331 8.64288,-10.37779 5.80856,-11.51412 6.60927,2.20711 9.11949,-11.67616 12.10643,-5.68017 1.83026,-3.49335 7.30191,-1.30663 3.8639,5.41262 9.08139,-1.5913 2.23062,5.70874 4.85531,-4.39452 6.68552,-1.89634 3.39992,-5.61152 8.99244,-4.60109 2.30688,-7.41889 5.54795,-4.03609 3.00597,-9.42772 12.26528,-14.4076 14.59755,15.8273 0.17796,3.7533 -5.33825,4.57752 -0.41941,8.6874 -9.74871,0.17411 -7.38456,13.97228 -6.79358,5.33061 0.29236,10.60468 -5.5988,15.20387 -21.63903,19.19231 -2.17342,24.14924 -10.7464,5.91654 -0.0253,3.7241 6.49491,5.08405 14.31795,-1.70316 4.41673,3.59057 -1.29005,6.24067 2.09081,5.43361 -6.73637,4.25788 -4.23249,24.88004 -5.04589,4.82986 3.51433,10.2825 -9.76769,6.99058 -14.47049,2.85343 -12.60209,14.47685 -15.26491,10.68922 -17.19042,3.54613 -9.36099,6.89522 -8.28703,0.07 -13.74598,9.97747 -11.78868,3.24108 -11.2548,6.23431 -5.22386,-0.53385 -5.40182,7.66422 -4.47393,0.6736 -4.08635,-4.32778 -0.2351,-6.59651 10.32696,-18.5187 -3.62874,-3.50163 -11.20396,-3.3428 1.39176,-10.03458 4.08629,-4.37231 -5.50985,-7.19392 2.89793,-5.19846 -0.39401,-5.73867 -5.24294,-10.94975 -1.15027,-8.43318 -7.82943,-6.04367 -26.11296,-3.67958 -19.77441,-8.83989 m 117.09584,22.04571 -1.00407,2.74537 -2.16706,-2.24966 0.0382,2.94873 -3.01227,-1.27736 1.16929,2.38951 -2.79622,-1.48071 1.70953,3.20293 -2.57378,-0.0763 -0.64191,2.80258 -2.44033,-1.11851 1.34727,2.33867 -3.6796,-0.71175 1.42358,0.66091 -2.33233,1.92562 4.74724,-0.46397 -2.19885,1.27736 1.08035,1.95737 -3.38723,8.01374 -1.52522,-5.33826 -3.41903,1.03592 -3.9338,5.66869 -3.77489,-1.63961 1.36633,-1.58876 -6.18982,0.23515 4.50576,2.67547 -2.75179,6.77448 5.10315,-4.68365 -1.20747,4.82351 -5.52891,2.39581 2.80894,-0.33046 -4.7536,8.43957 3.50797,-1.15026 0.34322,-2.40223 1.42352,2.10986 -0.0189,-2.71999 3.9592,0.1843 1.20111,-2.69451 -5.83396,1.69045 8.63653,-9.72964 3.9211,1.02956 -3.49529,4.98869 4.88705,-1.26465 -2.55473,0.92784 2.61828,0.77531 -2.60559,2.76448 5.46537,-6.81902 5.19205,2.64372 -1.43621,1.88749 4.11808,-2.17347 -1.9065,3.26653 1.98912,0.97865 -4.70277,0.28602 -1.32184,3.02499 -0.94693,-2.27515 -2.26236,1.40455 1.74126,1.182 -3.49528,4.58835 3.50163,2.21157 1.84298,-6.74272 3.56518,2.44033 -1.23286,-4.18162 4.09898,0.11436 -1.29641,4.33419 7.82944,-2.38951 -1.69043,-1.52521 -2.63102,2.01456 1.88748,-4.06091 -2.10353,0.97231 -0.47031,-1.77308 3.86389,0.27968 -1.28371,-2.22429 3.13938,-0.38129 -2.54839,-1.30919 -4.25788,2.96784 -0.0762,-4.54389 7.27016,2.69459 0.41309,-1.76675 5.52258,0.52113 3.05677,-2.14804 -7.35283,1.53158 0.0507,-3.04409 -2.51021,2.78354 0.2923,-2.67548 -1.71586,0.56559 1.95101,-1.83661 -3.77494,-1.48072 7.80403,-0.80075 -1.92556,-0.0952 1.20746,-4.11809 -0.99777,3.03774 -4.5502,0.19699 1.38537,-2.42762 -2.53562,1.72222 -4.15625,-4.11173 2.84709,-2.26244 -4.40405,-0.14615 4.61374,-2.14801 0.48301,-3.2983 -1.11216,2.33232 -2.55473,-0.7308 2.54204,-3.55883 -2.85344,0.9278 0.483,-3.25379 4.02274,-1.30915 -0.0189,-3.20293 2.71996,1.06767 -2.74543,-3.02504").attr({id: 'path170',parent: 'layer1',"font-size": '54.16669845999999922px',"font-style": 'normal',"font-weight": '400',fill: '#fefee9',"fill-opacity": '1',"fill-rule": 'evenodd',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'square',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"font-family": 'Lucida Grande',"stroke-miterlimit": '4',"stroke-dasharray": 'none'}).transform("t0,-62.362183").data('id', 'path170');
daerah.push(martapura)

// tanjung
var tanjung = rsr.path("m 326.15314,437.29854 -19.84685,-9.66669 -13.54263,-11.1938 29.71629,-21.3384 16.73921,-3.91472 3.0123,-2.77018 0.2542,-7.45702 6.56481,-9.13097 0.78802,-12.98084 7.3909,-8.02836 1.60787,-14.9147 5.47171,-5.26136 9.06869,3.01294 8.31238,-7.4672 -1.79211,-2.99895 1.71586,-4.78091 -4.58199,-4.21151 2.21793,-3.7228 -3.73044,-3.71707 -0.39401,-6.91368 2.48484,-4.2725 -3.51435,-2.22872 -20.31715,-1.60594 -6.0754,-15.03418 6.25335,-27.62799 20.17095,-65.75965 4.65195,-6.35952 11.50901,-6.23495 10.33966,-2.52487 6.2089,-11.27326 9.95841,-1.78958 32.58877,-17.91429 12.73554,1.12485 11.75685,-6.32964 -2.93602,13.98305 -6.42496,4.88831 -4.13714,10.37781 -10.7528,8.4497 -4.98237,-6.44721 5.98011,-8.02453 -3.43173,-2.69264 -4.53749,0.75688 -9.10684,11.54207 -7.67687,4.7968 -5.96742,11.87253 -7.73412,2.04315 -1.83662,8.52596 0.3114,4.80315 2.38953,2.03108 10.35875,-5.78946 5.03321,6.64612 4.18163,-3.29065 7.23202,3.97509 -2.54838,16.86634 6.29152,10.26597 5.24295,-0.64441 2.37043,5.69098 -2.68818,14.0987 5.68775,7.31532 4.19435,-0.21926 -0.0952,5.31093 7.90568,12.18202 -1.68407,16.7475 2.73902,4.26044 0.197,7.50659 -1.98276,13.18485 -7.18122,14.80285 -5.0904,27.25878 -18.87453,24.32973 -12.51313,-1.24559 -3.04409,8.67847 -19.33849,8.90091 -8.12173,13.05202 -7.88663,2.42129 -18.44244,11.96085 -11.07051,10.21196 -27.75258,3.90201").attr({id: 'path222',parent: 'layer1',"font-size": '54.16669845999999922px',"font-style": 'normal',"font-weight": '400',fill: '#fefee9',"fill-opacity": '1',"fill-rule": 'evenodd',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'square',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"font-family": 'Lucida Grande',"stroke-miterlimit": '4',"stroke-dasharray": 'none'}).transform("t0,-62.362183").data('id', 'path222');
daerah.push(tanjung)

layer1.attr({'id': 'layer1','name': 'layer1'});layer1.transform("t0,-62.362183");

for (var i = 0; i < daerah.length; i++) {

	// Change Yorkshire's fill colour to gold
    if (daerah[i].data('id') == 'banjarmasin') {
    	daerah[i].node.setAttribute('fill', 'gold');
    }
}
