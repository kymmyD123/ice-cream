$(function () {

  /**
   * Constructor scroll to top button
   * @constructor
   */
  var Up = function ( options ) {
    this._container = $('body');

    this._defaultOptions = {
      class: '',
      positionY: 'bottom',
      positionX: 'left',
      text: 'Up',
      displayAlways: true
    };

    if( options ) {
      $.extend( this._defaultOptions, options );
    }

    this._initUp();
    this._displayState();
    this._clickEvent();
  };

  /**
   * Creating markup
   * @private
   */
  Up.prototype._initUp = function(){
    this.$div = $('<div></div>');
    this.$div.addClass('up');
    this.$div.addClass( this._defaultOptions.class );
    this.$div.addClass( 'up--position-' + this._defaultOptions.positionX );
    this.$div.addClass( 'up--position-' + this._defaultOptions.positionY );
    this.$div.text(this._defaultOptions.text);
    this._container.append(this.$div);
  };

  /**
   * Click event handler
   * @private
   */
  Up.prototype._clickEvent = function(){
    this._container.find(".up").bind('click', function(e){
      $("body").animate(
          {
            scrollTop: 0
          },
          1000
      );
      e.preventDefault();
      return false;
    });
  };

  /**
   * Setup button behavior
   * @private
   */
  Up.prototype._displayState = function() {
    if (this._defaultOptions.displayAlways) {
      this._displayUp();
    } else{
      $(window).scroll(this._displayScroll.bind(this));
    }
  };

  /**
   * Scroll event handler
   * @private
   */
  Up.prototype._displayScroll = function() {
    var windowHeight = $(window).height();
    var scrollHeight = $('body').scrollTop();
    // console.log(windowHeight, scrollHeight);

    if (windowHeight <= scrollHeight){
      this._displayUp();
    }else {
      this._displayUpNone();
    }
  };

  /**
   * Show button
   * @private
   */
  Up.prototype._displayUp = function() {
    this.$div.fadeIn();
  };

  /**
   * Hide button
   * @private
   */
  Up.prototype._displayUpNone = function() {
    this.$div.fadeOut();
  };

  window.Up = Up;

});