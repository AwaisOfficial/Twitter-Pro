<?php 

$features = array (
            array( 'title'  => 'Suspension',  'name' => 'suspension_feature', 'image' => 'suspension.png' , 'options' => array( array( 'text' => 'Hardtail', 'value' => 'hardtail' ), array ('text' => 'Full', 'value' => 'full' ) ) ) ,
            array( 'title' => 'Breaks',      'name' => 'breaks_feature' , 'image' => 'break.png' , 'options' => array( array( 'text' =>'Disc - Piston', 'value' => 'disc_piston' ) , array( 'text' =>'Disc - Mechanical' , 'value' => 'disc_mechanical' ), array ( 'text' =>'Disc - Hydraulic', 'value' => 'disc_hydraulic' ) ) ),
            array( 'title' => 'Frame',       'name' => 'frame_feature' ,  'image' => 'frame.png' , 'options' => array ( array( 'text' =>'Aluminium', 'value' => 'aluminium' ) , array( 'text' => 'Carbon', 'value' => 'carbon' ) ) ),
            array( 'title' => 'Wheel Size',         'name' => 'wheel_size_feature' , 'image' => 'wheel.png' , 'options' => array ( array( 'text' =>'26 Inch', 'value' => '26' ) , array('text' =>'24.5 Inch', 'value' => '24.5' ) , array( 'text' =>'28 Inch', 'value' => '28' ) , array('text' =>'29.0 Inch', 'value' => '29.0' ) , array( 'text' =>'Fat / Plus ', 'value' => 'fat/plus' ) ) ),
            array( 'title' => 'Crankset Quantity',  'name' => 'crankset_quantity_feature' ,       'image' => 'crankset.png' , 'options' => array ( array( 'text' => 0 , 'value' => 0 ) , array( 'text' => 1 , 'value' => 1 ) , array( 'text' => 2, 'value' => 2 ) , array( 'text' => 3, 'value' => 3 ) ) ),
            array( 'title' => 'Suspension Lockout Quantity' , 'name' => 'suspension_lockout_quantity_feature' , 'image' => 'suspension.png' , 'options' => array ( array( 'text' => 0 , 'value' => 0 ) , array( 'text' => 1, 'value' => 1 ) , array( 'text' => 2, 'value' => 2 ) , array( 'text' => 3, 'value' => 3 ) ) ),
            array( 'title' => 'Suspension Travel', 'name' => 'suspension_travel_feature' , 'image' => 'suspension.png' , 'options' => array ( array( 'text' =>'Short (80-120 mm)', 'value' => 'short' ) , array( 'text' => 'Medium (120 - 140 mm)', 'value' => 'medium' ) , array( 'text' => 'Long (140 - 170 mm)', 'value' => 'long' ) ) ),
            array( 'title' => 'Remote Suspension', 'name' => 'remote_suspension_feature' ,      'image' => 'rc.png' , 'options' => array ( array( 'text' =>'Yes', 'value' => 'yes' ) , array( 'text' => 'No', 'value' => 'no' ) ) ) ,
            array( 'title' => 'Remote Seat',       'name' => 'remote_seat_feature'   , 'image' => 'seat.png' , 'options' => array ( array( 'text' =>'Yes', 'value' => 'yes' ) , array( 'text' => 'No', 'value' => 'no' ) ) )  ,
            array( 'title' => 'Gender',            'name' => 'gender_feature'   , 'image' => 'baby.png' , 'options' => array ( array( 'text' =>'Male', 'value' => 'male') , array( 'text' =>'Female', 'value' => 'female' ) , array( 'text' =>'Both', 'value' => 'both' )))
                  );
 
$attributes = [ 
            array( 'text' => 'Frame' ,        'custom_field' => 'frame' ), array( 'text' => 'Fork', 'custom_field' => 'fork' ), array( 'text' => 'Rear Shock', 'custom_field' => 'rear_shock' ), 
            array( 'text' => 'Remote System', 'custom_field' => 'remote_system' ), array( 'text' =>'Head Set', 'custom_field' => 'headset' ), array( 'text' =>'Rear Derailleur', 'custom_field' => 'rear_derailleur' ), 
            array( 'text' =>'Shifters' , 'custom_field' => 'shifters'), array( 'text' =>'Breaks', 'custom_field' => 'breaks' ), array( 'text' =>'Break Levers', 'custom_field' => 'break_levers' ), 
            array( 'text' =>'Crank Set', 'custom_field' => 'crankset' ), array( 'text' =>'BB Set' , 'custom_field' => 'bb_set' ), array( 'text' =>'Handlebar', 'custom_field' => 'handlebar') ,
            array( 'text' =>'H\'stem',   'custom_field' => 'hstem' ), array( 'text' =>'Pedals', 'custom_field' => 'pedals'), array( 'text' =>'Seat Post', 'custom_field' => 'seat_post' ), 
            array( 'text' =>'Seat',      'custom_field' => 'seat') , array( 'text' =>'Hub Front', 'custom_field' => 'hub_front') , array( 'text' =>'Rear Hubs', 'custom_field' => 'hub_rear' ),
            array( 'text' =>'Chain',     'custom_field' => 'chain') , array( 'text' =>'Chain Guide', 'custom_field' => 'chain_guide' ), array( 'text' =>'Cassete', 'custom_field' => 'cassette') ,
            array( 'text' =>'Spokes',    'custom_field' => 'spokes') , array( 'text' =>'Wheel Set', 'custom_field' => 'wheel_set' ), array( 'text' =>'Rims', 'custom_field' => 'rims') , 
            array( 'text' =>'Tires' ,    'custom_field' => 'tires' ), 
            array( 'text' => 'Size' ,    'custom_field' => 'size') , array( 'text' => 'Front Derailleur' , 'custom_field' => 'front_derailleur') ,
            
          ];

    function appendMore($index , $attribute, $heading, $value1, $value2) {       
      $more  = '<h4>' . $heading .'</h4>';
      $more .= '<p attribute="<?php echo $attribute" index="<?php echo index ?>">'. $value1 . $value2 .'</p>';
      return $more;
    }   
  ?>
  <div class="item">
    <div class="top product">

    <?php 
      $i = $index_query->current_post;
      $percentage = $i == 0 ? '95%' : ( $i == 1 ? '89%' : ( $i == 2 ? '82%'  : '70%' ));
      $title = get_field('bike_brand') . ' ' . get_field('bike_model');
    ?>        
    
    <div id="stickyElements">
      <div class="percentage-match">
        <div class="section-sum mt-3" style="font-size: 30px;"><?php echo $percentage; ?></div>
        <div class="section-sum mt-3" style="font-size: 26px;">MATCH</div>
      </div>
      <hr>
      <div id="product_name'+i+'" class="prod-name"><span><?php echo $title; ?></span></div> 
      <hr>
      <div class="prod-img"><img src="<?php echo get_the_post_thumbnail_url(get_the_ID(),'full'); ?>" alt="<?php echo $title ?>"></div>
    </div>

            
    <div id="separator" class="separator-before">
      <hr>
    </div>            

    
    <div class="row align-items-center">
            
      <div class="col-8">
        <div><span class="prod-price">$ <?php echo get_field( 'price_details' );?> </span> RRP</div>
      </div>

      <div class="col">
        <?php 
          $productExistInWishList = false;

          if(get_current_user_id() > 0){
            $params  = sprintf('reviews_wishList', get_the_ID(), get_current_user_id());
            $wishList  = $GLOBALS['wpdb']->get_results( "SELECT * FROM reviews_wishList where product_id = ". get_the_ID()." AND user_id=". get_current_user_id()."" );
            if(count($wishList) > 0) $productExistInWishList = true;
          }
          if( $productExistInWishList ) :
        ?>
          <button class="btn btn-primary wishListBtn" id="add_to_wishlist<?php echo $i ?>" index="<?php echo $i ?>">Remove from WishList</i>
          <?php else: ?>
          <button class="btn btn-primary wishListBtn" id="add_to_wishlist<?php echo $i ?>" index="<?php echo $i ?>">Add to WishList</i>
          <?php endif; ?>  
        </div>  

        <div class="w-100"></div>
            
        <div class="col"><hr></div>

        <div class="w-100"></div>

        <div class="col cost-calculator">

            <div class="row no-gutter border border-dark p-2 m-2">

                <div class="col text-center">
                    <h6 class="p-2">Should I buy this ? </h6>'
                </div>

                <div class="w-100"></div>

                <div class="col mt-2">
                Workout the cost per ride\n Over one year'
                </div>

                <div class="w-100"></div>

                <div class="col padding-0 mt-1">
                <div class="input-group">           
                    <input type="number" class="form-control" id="calcInput_'+index+'" aria-describedby="calc_Help" placeholder="0">
                    <div class="input-group-append">
                    <button class="btn btn-secondary calc_cost" type="button" id="rideCost_'+index+'" index="'+index+'" ><i class="fas fa-calculator"></i></button> 
                    </div>
                </div>             
                    <small id="calc_Help" class="form-text text-muted">Enter rides per week.</small>
                </div>

                <div class="w-100"></div>

                <div class="col padding-0 mt-3">
                <div class="input-group">
                    <input type="text" readonly class="form-control cost-val" id="ride_cost_input_<?php echo $i;?>" value="0">
                </div>
                </div>

                <div class="w-100"></div>

                <div class="col mt-3">
                    Cost per ride , Over one year'
                </div>

            </div>            
        </div>

        <div class="w-100"></div>

        <div class="col"><hr></div>

        <div class="w-100"></div>
            
        <div class="col"><div class="row w-100" style="height:400px"><div class="col text-left my-auto overflow-auto">

         <?php for($i=1; $i<7;$i++){ 
            $feature = get_field('feature_'. $i);
            if($feature){ 
          ?>
            <p>- <?php echo $feature; ?></p>                    
          <?php 
            }                
          }
          ?>

        </div></div></div>

        <div class="w-100"></div>

        <div class="col"><hr></div>

        <div class="w-100"></div>

       
        <div class="col buy-now-col">
          <?php if( get_field('custom_bike' == 'yes') ) :
            echo do_shortcode('[wpecpp name='.$title.' price='.get_field( "price_details").']');
            else :
          ?>
          <button type="button" class="btn btn-block btn-primary findMyBike">Find my bike</button>
          <?php endif;?>  
            
        </div>
            
      </div>

      <hr>

      <div id="idMyModal"></div>
        <div class="collapse border-top border-light" id="descSection" index="'+i+'">
          <div class="description">
            
          <?php for($j=0; $j< count($attributes); $j++) {                
                $attribute    = $attributes[j];
                $detailsKey   = $attributes[$j]->custom_field . '_details';
                $ratingKey    = $attributes[$j]->custom_field . '_rating';
                
                $details   = '';
                
                if(get_field($detailsKey) ) {
                    $details .= appendMore(i , $detailsKey, $attribute['text'] , get_field($detailsKey).substr(0,100), get_field($detailsKey).substr(100) );
                    $rating   = get_field($ratingKey) ? get_field($ratingKey) : '0' ;
                    $details .= appendStars($rating , $ratingKey , get_the_ID() );
                }
                else {
                    $details   += "<h4>"+ $attribute['text'] +"</h4>";
                    $rating     = get_field($ratingKey) ? get_field($ratingKey) : '0';
                    $details   +=  appendStars($rating , $ratingKey , get_the_ID() );
                }
                ?>
                <div class="row">
                  <div class="col details-col border-bottom bordre-light">
                    <?php echo $details ?>
                  </div>
                </div>
          <?php } ?>

    </div>
    </div>
  </div>
</div>