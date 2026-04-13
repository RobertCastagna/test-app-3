const { withEntitlementsPlist, withInfoPlist } = require('@expo/config-plugins');

const HOMEKIT_ENTITLEMENT = 'com.apple.developer.homekit';
const HOMEKIT_USAGE_KEY = 'NSHomeKitUsageDescription';
const DEFAULT_USAGE = 'This app reads your HomeKit homes and accessories to display them.';

function withHomeKit(config, props = {}) {
  const usage = props.usageDescription || DEFAULT_USAGE;

  config = withEntitlementsPlist(config, (cfg) => {
    cfg.modResults[HOMEKIT_ENTITLEMENT] = true;
    return cfg;
  });

  config = withInfoPlist(config, (cfg) => {
    if (!cfg.modResults[HOMEKIT_USAGE_KEY]) {
      cfg.modResults[HOMEKIT_USAGE_KEY] = usage;
    }
    return cfg;
  });

  return config;
}

module.exports = withHomeKit;
