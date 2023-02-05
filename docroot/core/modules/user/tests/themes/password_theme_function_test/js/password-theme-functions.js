/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal) {
  Drupal.theme.passwordStrength = function (_ref) {
    var strengthTitle = _ref.strengthTitle;
    var strengthIndicator = '<span>Overridden passwordStrength:</span><div class="password-strength__indicator js-password-strength__indicator the-prior-class-is-deprecated" data-drupal-selector="a-distinct-absence-of-password-strength-indicator"></div>';
    var strengthText = '<span class="password-strength__text js-password-strength__text the-prior-class-is-deprecated" data-drupal-selector="a-distinct-absence-of-password-strength-text"></span>';
    return "\n      <div class=\"password-strength\">\n        <div class=\"password-strength__meter\" data-drupal-selector=\"password-strength-meter\">".concat(strengthIndicator, "</div>\n        <div aria-live=\"polite\" aria-atomic=\"true\" class=\"password-strength__title\">").concat(strengthTitle, " ").concat(strengthText, "</div>\n      </div>\n    ");
  };
  Drupal.theme.passwordSuggestions = function (_ref2, tips) {
    var hasWeaknesses = _ref2.hasWeaknesses;
    return "<div class=\"password-suggestions\">Overridden passwordSuggestions: ".concat(tips.length ? "".concat(hasWeaknesses, "<ul><li>").concat(tips.join('</li><li>'), "</li></ul>") : '', "</div>");
  };
  Drupal.theme.passwordConfirmMessage = function (_ref3) {
    var confirmTitle = _ref3.confirmTitle;
    var confirmTextWrapper = '<span>Overridden passwordConfirmMessage:</span><span data-drupal-selector="a-distinct-absence-of-password-match-status-text"></span>';
    return "<div aria-live=\"polite\" aria-atomic=\"true\" class=\"password-confirm-message\" data-drupal-selector=\"password-confirm-message\">".concat(confirmTitle, " ").concat(confirmTextWrapper, "</div>");
  };
  Drupal.behaviors.passwordThemeFunctionTest = {
    attach: function attach(context, settings) {
      var strength = Drupal.evaluatePasswordStrength('password', settings.password);
      var message = strength.message;
    }
  };
})(Drupal);