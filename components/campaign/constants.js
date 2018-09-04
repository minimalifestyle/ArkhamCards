export const CUSTOM = 'custom';

import L from '../../app/i18n';

// TODO: make this dynamic
export const CAMPAIGN_SCENARIOS = {
  'core': [
    { name: L('The Gathering'), code: 'torch', pack_code: 'core' },
    { name: L('The Midnight Masks'), code: 'arkham', pack_code: 'core' },
    { name: L('The Devourer Below'), code: 'tentacles', pack_code: 'core' },
  ],
  'dwl': [
    { name: L('Extracurricular Activity'), code: 'extracurricular_activity', pack_code: 'dwl' },
    { name: L('The House Always Wins'), code: 'the_house_always_wins', pack_code: 'dwl' },
    { name: L('Armitage’s Fate'), code: 'armitages_fate', interlude: true },
    { name: L('The Miskatonic Museum'), code: 'the_miskatonic_museum', pack_code: 'tmm' },
    { name: L('Essex County Express'), code: 'essex_county_express', pack_code: 'tece' },
    { name: L('Blood on the Altar'), code: 'blood_on_the_altar', pack_code: 'bota' },
    { name: L('The Survivors'), code: 'dwl_interlude2', interlude: true },
    { name: L('Undimensioned and Unseen'), code: 'undimensioned_and_unseen', pack_code: 'uau' },
    { name: L('Where Doom Awaits'), code: 'where_doom_awaits', pack_code: 'wda' },
    { name: L('Lost in Time and Space'), code: 'lost_in_time_and_space', pack_code: 'litas' },
    { name: L('Epilogue'), code: 'dwl_epilogue', interlude: true },
  ],
  'ptc': [
    { name: L('Prologue'), code: 'ptc_prologue', interlude: true },
    { name: L('Curtain Call'), code: 'curtain_call', pack_code: 'ptc' },
    { name: L('The Last King'), code: 'the_last_king', pack_code: 'ptc' },
    { name: L('Lunacy’s Reward'), code: 'ptc_interlude1', interlude: true },
    { name: L('Echoes of the Past'), code: 'echoes_of_the_past', pack_code: 'eotp' },
    { name: L('The Unspeakable Oath'), code: 'the_unspeakable_oath', pack_code: 'tuo' },
    { name: L('Lost Soul'), code: 'ptc_interlude2', interlude: true },
    { name: L('A Phantom of Truth'), code: 'a_phantom_of_truth', pack_code: 'apot' },
    { name: L('The Pallid Mask'), code: 'the_pallid_mask', pack_code: 'tpm' },
    { name: L('Black Stars Rise'), code: 'black_stars_rise', pack_code: 'bsr' },
    { name: L('Dim Carcosa'), code: 'dim_carcosa', pack_code: 'dca' },
    { name: L('Epilogue'), code: 'ptc_epilogue', interlude: true },
  ],
  'tfa': [
    { name: L('Prologue'), code: 'tfa_prologue', interlude: true },
    { name: L('The Untamed Wilds'), code: 'wilds', pack_code: 'tfa' },
    { name: L('Restless Nights'), code: 'tfa_interlude1', interlude: true },
    { name: L('The Doom of Eztli'), code: 'eztli', pack_code: 'tfa' },
    { name: L('Expedition’s End'), code: 'tfa_interlude2', interlude: true },
    { name: L('Threads of Fate'), code: 'threads_of_fate', pack_code: 'tof' },
    { name: L('The Boundary Beyond'), code: 'the_boundary_beyond', pack_code: 'tbb' },
    { name: L('The Jungle Beckons'), code: 'tfa_interlude3', interlude: true },
    { name: L('Heart of the Elders'), code: 'heart_of_the_elders', pack_code: 'hote' },
    { name: L('The City of Archives'), code: 'the_city_of_archives', pack_code: 'tcoa' },
    { name: L('Those Held Captive'), code: 'tfa_interlude4', interlude: true },
    { name: L('The Depths of Yoth'), code: 'the_depths_of_yoth', pack_code: 'tdoy' },
    { name: L('The Darkness'), code: 'tfa_interlude5', interlude: true },
    { name: L('Shattered Aeons'), code: 'shattered_aeons', pack_code: 'sha' },
    { name: L('Epilogue'), code: 'tfa_epilogue', interlude: true },
  ],
  'rtnotz': [
    { name: L('Return to The Gathering'), code: 'return_to_the_gathering', pack_code: 'rtnotz' },
    { name: L('Return to the Midnight Masks'), code: 'return_to_the_midnight_masks', pack_code: 'rtnotz' },
    { name: L('Return to the Devourer Below'), code: 'return_to_the_devourer_below', pack_code: 'rtnotz' },
  ],
};
