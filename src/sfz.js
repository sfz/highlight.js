/*
Language: sfz
Author: redtide <redtid3@gmail.com>
Description: language definition for sfz files
*/
import * as regex from './../../../src/lib/regex.js';

export default function(hljs) {
  const SFZ_PREPROCESSOR = {
    scope: 'meta',
    begin: /#\s*[a-z]+\b/,
    end: /$/,
    keywords: {
      built_in: ['define', 'include']
    },
    relevance: 0
  };
/*
  FIXME: Headers seems to be confused as HTML tags, lowering the relevance helps
  but for some reason still getting a wrong language in tests (gradle)
*/
  const SFZ_HEADER_KEYWORDS = [
    'control', 'curve', 'effect', 'global', 'group', 'master', 'region', 'sample'
  ];
  const SFZ_HEADERS = {
    scope: 'keyword',
    begin: '<',
    end: '>',
    keyword: SFZ_HEADER_KEYWORDS,
    relevance: 1
  };
  const SFZ_OPCODE_KEYWORDS = [
    'amp_attack',
    'amp_decay',
    'amp_delay',
    'amp_hold',
    'amp_keycenter',
    'amp_keytrack',
    'amp_random',
    'amp_release',
    'amp_sustain',
    'amp_vel2attack',
    'amp_vel2decay',
    'amp_vel2delay',
    'amp_vel2hold',
    'amp_vel2release',
    'amp_vel2sustain',
    'amp_veltrack',
    'amp_veltrack_random',
    'ampeg_attack',
    'ampeg_attack_shape',
    'ampeg_decay',
    'ampeg_decay_shape',
    'ampeg_decay_zero',
    'ampeg_delay',
    'ampeg_dynamic',
    'ampeg_hold',
    'ampeg_release',
    'ampeg_release_shape',
    'ampeg_release_zero',
    'ampeg_start',
    'ampeg_sustain',
    'ampeg_vel2attack',
    'ampeg_vel2decay',
    'ampeg_vel2delay',
    'ampeg_vel2hold',
    'ampeg_vel2release',
    'ampeg_vel2sustain',
    'amplfo_delay',
    'amplfo_depth',
    'amplfo_depthchanaft',
    'amplfo_depthpolyaft',
    'amplfo_fade',
    'amplfo_freq',
    'amplfo_freqchanaft',
    'amplfo_freqpolyaft',
    'amplitude',
    'apan_depth',
    'apan_dry',
    'apan_freq',
    'apan_phase',
    'apan_waveform',
    'apan_wet',
    'bend_down',
    'bend_smooth',
    'bend_step',
    'bend_stepdown',
    'bend_stepup',
    'bend_up',
    'benddown',
    'bendstep',
    'bendup',
    'bitred',
    'bus',
    'comp_attack',
    'comp_gain',
    'comp_ratio',
    'comp_release',
    'comp_stlink',
    'comp_threshold',
    'count',
    'curve_index',
    'cutoff',
    'cutoff2',
    'cutoff2_chanaft',
    'cutoff2_polyaft',
    'cutoff2_random',
    'cutoff_chanaft',
    'cutoff_polyaft',
    'cutoff_random',
    'decim',
    'default_path',
    'delay',
    'delay_beats',
    'delay_beats_random',
    'delay_cutoff',
    'delay_damphi',
    'delay_damplo',
    'delay_dry',
    'delay_feedback',
    'delay_filter',
    'delay_input',
    'delay_levelc',
    'delay_levell',
    'delay_levelr',
    'delay_lfofreq',
    'delay_moddepth',
    'delay_mode',
    'delay_panc',
    'delay_panl',
    'delay_panr',
    'delay_random',
    'delay_resonance',
    'delay_samples',
    'delay_spread',
    'delay_time_tap',
    'delay_timec',
    'delay_timel',
    'delay_timer',
    'delay_wet',
    'direction',
    'directtomain',
    'disto_depth',
    'disto_dry',
    'disto_stages',
    'disto_tone',
    'disto_wet',
    'dsp_order',
    'effect1',
    'effect2',
    'effect3',
    'effect4',
    'end',
    'eq_bw',
    'eq_freq',
    'eq_gain',
    'eq_type',
    'fil2_gain',
    'fil2_keycenter',
    'fil2_keytrack',
    'fil2_type',
    'fil2_veltrack',
    'fil_attack',
    'fil_decay',
    'fil_delay',
    'fil_depth',
    'fil_gain',
    'fil_hold',
    'fil_keycenter',
    'fil_keytrack',
    'fil_random',
    'fil_release',
    'fil_sustain',
    'fil_type',
    'fil_vel2attack',
    'fil_vel2decay',
    'fil_vel2delay',
    'fil_vel2depth',
    'fil_vel2hold',
    'fil_vel2release',
    'fil_vel2sustain',
    'fil_veltrack',
    'fileg_attack',
    'fileg_attack_shape',
    'fileg_decay',
    'fileg_decay_shape',
    'fileg_decay_zero',
    'fileg_delay',
    'fileg_depth',
    'fileg_dynamic',
    'fileg_hold',
    'fileg_release',
    'fileg_release_shape',
    'fileg_release_zero',
    'fileg_start',
    'fileg_sustain',
    'fileg_vel2attack',
    'fileg_vel2decay',
    'fileg_vel2delay',
    'fileg_vel2depth',
    'fileg_vel2hold',
    'fileg_vel2release',
    'fileg_vel2sustain',
    'fillfo_delay',
    'fillfo_depth',
    'fillfo_depthchanaft',
    'fillfo_depthpolyaft',
    'fillfo_fade',
    'fillfo_freq',
    'fillfo_freqchanaft',
    'fillfo_freqpolyaft',
    'filter_cutoff',
    'filter_resonance',
    'filter_type',
    'filtype',
    'gain_random',
    'gate_attack',
    'gate_release',
    'gate_stlink',
    'gate_threshold',
    'global_amplitude',
    'global_label',
    'global_tune',
    'global_volume',
    'group',
    'group_amplitude',
    'group_label',
    'group_tune',
    'group_volume',
    'hibend',
    'hibpm',
    'hichan',
    'hichanaft',
    'hikey',
    'hipolyaft',
    'hiprog',
    'hirand',
    'hitimer',
    'hivel',
    'image',
    'internal',
    'key',
    'load_end',
    'load_mode',
    'load_start',
    'lobend',
    'lobpm',
    'lochan',
    'lochanaft',
    'lokey',
    'loop_count',
    'loop_crossfade',
    'loop_end',
    'loop_mode',
    'loop_start',
    'loop_tune',
    'loop_type',
    'loopcount',
    'loopend',
    'loopmode',
    'loopstart',
    'looptune',
    'looptype',
    'lopolyaft',
    'loprog',
    'lorand',
    'lotimer',
    'lovel',
    'master_amplitude',
    'master_label',
    'master_tune',
    'master_volume',
    'md5',
    'noise_filter',
    'noise_level',
    'noise_step',
    'noise_stereo',
    'noise_tone',
    'note_offset',
    'note_polyphony',
    'note_selfmask',
    'octave_offset',
    'off_by',
    'off_curve',
    'off_mode',
    'off_shape',
    'off_time',
    'offby',
    'offset',
    'offset_random',
    'oscillator',
    'oscillator_detune',
    'oscillator_mod_depth',
    'oscillator_mode',
    'oscillator_multi',
    'oscillator_phase',
    'oscillator_quality',
    'oscillator_table_size',
    'output',
    'pan',
    'pan_keycenter',
    'pan_keytrack',
    'pan_law',
    'pan_random',
    'pan_veltrack',
    'param_offset',
    'phase',
    'phaser_depth',
    'phaser_feedback',
    'phaser_freq',
    'phaser_stages',
    'phaser_waveform',
    'phaser_wet',
    'pitch',
    'pitch_attack',
    'pitch_decay',
    'pitch_delay',
    'pitch_depth',
    'pitch_hold',
    'pitch_keycenter',
    'pitch_keytrack',
    'pitch_random',
    'pitch_release',
    'pitch_sustain',
    'pitch_vel2attack',
    'pitch_vel2decay',
    'pitch_vel2delay',
    'pitch_vel2depth',
    'pitch_vel2hold',
    'pitch_vel2release',
    'pitch_vel2sustain',
    'pitch_veltrack',
    'pitcheg_attack',
    'pitcheg_attack_shape',
    'pitcheg_decay',
    'pitcheg_decay_shape',
    'pitcheg_decay_zero',
    'pitcheg_delay',
    'pitcheg_depth',
    'pitcheg_dynamic',
    'pitcheg_hold',
    'pitcheg_release',
    'pitcheg_release_shape',
    'pitcheg_release_zero',
    'pitcheg_start',
    'pitcheg_sustain',
    'pitcheg_vel2attack',
    'pitcheg_vel2decay',
    'pitcheg_vel2delay',
    'pitcheg_vel2depth',
    'pitcheg_vel2hold',
    'pitcheg_vel2release',
    'pitcheg_vel2sustain',
    'pitchlfo_delay',
    'pitchlfo_depth',
    'pitchlfo_depthchanaft',
    'pitchlfo_depthpolyaft',
    'pitchlfo_fade',
    'pitchlfo_freq',
    'pitchlfo_freqchanaft',
    'pitchlfo_freqpolyaft',
    'polyphony',
    'polyphony_group',
    'polyphony_stealing',
    'position',
    'position_keycenter',
    'position_keytrack',
    'position_random',
    'position_veltrack',
    'region_label',
    'resonance',
    'resonance2',
    'resonance_random',
    'reverb_damp',
    'reverb_dry',
    'reverb_input',
    'reverb_predelay',
    'reverb_size',
    'reverb_tone',
    'reverb_type',
    'reverb_wet',
    'rt_dead',
    'rt_decay',
    'sample',
    'sample_fadeout',
    'sample_quality',
    'script',
    'seq_length',
    'seq_position',
    'sostenuto_cc',
    'sostenuto_lo',
    'sostenuto_sw',
    'static_cyclic_level',
    'static_cyclic_time',
    'static_filter',
    'static_level',
    'static_random_level',
    'static_random_maxtime',
    'static_random_mintime',
    'static_stereo',
    'static_tone',
    'stop_beats',
    'strings_number',
    'sustain_cc',
    'sustain_lo',
    'sustain_sw',
    'sw_default',
    'sw_down',
    'sw_hikey',
    'sw_hilast',
    'sw_label',
    'sw_last',
    'sw_lokey',
    'sw_lolast',
    'sw_note_offset',
    'sw_octave_offset',
    'sw_previous',
    'sw_up',
    'sw_vel',
    'sync_beats',
    'sync_offset',
    'tdfir_dry',
    'tdfir_gain',
    'tdfir_impulse',
    'tdfir_wet',
    'transpose',
    'trigger',
    'tune',
    'tune_keytrack',
    'tune_random',
    'tune_veltrack',
    'type',
    'vendor_specific',
    'volume',
    'waveguide',
    'width',
    'xf_cccurve',
    'xf_keycurve',
    'xf_velcurve',
    'xfin_hikey',
    'xfin_hivel',
    'xfin_lokey',
    'xfin_lovel',
    'xfout_hikey',
    'xfout_hivel',
    'xfout_lokey',
    'xfout_lovel'
  ];
  const SFZ_OPCODE_PATTERNS = [
    /amp_velcurve_([0-9]{1,3})/,
    /amp_veltrack_cc([0-9]{1,3})/,
    /amp_veltrack_curvecc([0-9]{1,3})/,
    /amp_veltrack_oncc([0-9]{1,3})/,
    /ampeg_attack_oncc([0-9]{1,3})/,
    /ampeg_attackcc([0-9]{1,3})/,
    /ampeg_decay_curvecc([0-9]{1,3})/,
    /ampeg_decay_oncc([0-9]{1,3})/,
    /ampeg_decaycc([0-9]{1,3})/,
    /ampeg_delay_oncc([0-9]{1,3})/,
    /ampeg_delaycc([0-9]{1,3})/,
    /ampeg_hold_curvecc([0-9]{1,3})/,
    /ampeg_hold_oncc([0-9]{1,3})/,
    /ampeg_holdcc([0-9]{1,3})/,
    /ampeg_release_oncc([0-9]{1,3})/,
    /ampeg_releasecc([0-9]{1,3})/,
    /ampeg_start_oncc([0-9]{1,3})/,
    /ampeg_startcc([0-9]{1,3})/,
    /ampeg_sustain_curvecc([0-9]{1,3})/,
    /ampeg_sustain_oncc([0-9]{1,3})/,
    /ampeg_sustaincc([0-9]{1,3})/,
    /amplfo_depth_oncc([0-9]{1,3})/,
    /amplfo_depthcc([0-9]{1,3})/,
    /amplfo_freqcc([0-9]{1,3})/,
    /amplitude_cc([0-9]{1,3})/,
    /amplitude_curvecc([0-9]{1,3})/,
    /amplitude_oncc([0-9]{1,3})/,
    /amplitude_smoothcc([0-9]{1,3})/,
    /apan_depth_oncc([0-9]{1,3})/,
    /apan_dry_oncc([0-9]{1,3})/,
    /apan_freq_oncc([0-9]{1,3})/,
    /apan_phase_oncc([0-9]{1,3})/,
    /apan_wet_oncc([0-9]{1,3})/,
    /bitred_curvecc([0-9]{1,3})/,
    /bitred_oncc([0-9]{1,3})/,
    /bitred_smoothcc([0-9]{1,3})/,
    /bitred_stepcc([0-9]{1,3})/,
    /bypass_oncc([0-9]{1,3})/,
    /cutoff2_cc([0-9]{1,3})/,
    /cutoff2_curvecc([0-9]{1,3})/,
    /cutoff2_oncc([0-9]{1,3})/,
    /cutoff2_smoothcc([0-9]{1,3})/,
    /cutoff2_stepcc([0-9]{1,3})/,
    /cutoff_cc([0-9]{1,3})/,
    /cutoff_curvecc([0-9]{1,3})/,
    /cutoff_oncc([0-9]{1,3})/,
    /cutoff_smoothcc([0-9]{1,3})/,
    /cutoff_stepcc([0-9]{1,3})/,
    /decim_curvecc([0-9]{1,3})/,
    /decim_oncc([0-9]{1,3})/,
    /decim_smoothcc([0-9]{1,3})/,
    /decim_stepcc([0-9]{1,3})/,
    /delay_beats_curvecc([0-9]{1,3})/,
    /delay_beats_oncc([0-9]{1,3})/,
    /delay_cc([0-9]{1,3})/,
    /delay_curvecc([0-9]{1,3})/,
    /delay_cutoff_oncc([0-9]{1,3})/,
    /delay_damphi_oncc([0-9]{1,3})/,
    /delay_damplo_oncc([0-9]{1,3})/,
    /delay_dry_oncc([0-9]{1,3})/,
    /delay_feedback_oncc([0-9]{1,3})/,
    /delay_input_oncc([0-9]{1,3})/,
    /delay_lfofreq_oncc([0-9]{1,3})/,
    /delay_moddepth_oncc([0-9]{1,3})/,
    /delay_oncc([0-9]{1,3})/,
    /delay_panc_oncc([0-9]{1,3})/,
    /delay_panl_oncc([0-9]{1,3})/,
    /delay_panr_oncc([0-9]{1,3})/,
    /delay_resonance_oncc([0-9]{1,3})/,
    /delay_samples_oncc([0-9]{1,3})/,
    /delay_spread_oncc([0-9]{1,3})/,
    /delay_syncc_oncc([0-9]{1,3})/,
    /delay_syncl_oncc([0-9]{1,3})/,
    /delay_syncr_oncc([0-9]{1,3})/,
    /delay_timec_oncc([0-9]{1,3})/,
    /delay_timel_oncc([0-9]{1,3})/,
    /delay_timer_oncc([0-9]{1,3})/,
    /delay_wet_oncc([0-9]{1,3})/,
    /disto_depth_oncc([0-9]{1,3})/,
    /disto_dry_oncc([0-9]{1,3})/,
    /disto_tone_oncc([0-9]{1,3})/,
    /disto_wet_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_ampeg/,
    /eg([0-9]{1,3})_amplitude/,
    /eg([0-9]{1,3})_amplitude_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_bitred/,
    /eg([0-9]{1,3})_bitred_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_curve([0-9]{1,3})/,
    /eg([0-9]{1,3})_cutoff/,
    /eg([0-9]{1,3})_cutoff2/,
    /eg([0-9]{1,3})_cutoff2_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_cutoff_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_decim/,
    /eg([0-9]{1,3})_decim_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_depth_lfo([0-9]{1,3})/,
    /eg([0-9]{1,3})_depthadd_lfo([0-9]{1,3})/,
    /eg([0-9]{1,3})_driveshape/,
    /eg([0-9]{1,3})_driveshape_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_eq([0-9]{1,3})bw/,
    /eg([0-9]{1,3})_eq([0-9]{1,3})bw_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_eq([0-9]{1,3})freq/,
    /eg([0-9]{1,3})_eq([0-9]{1,3})freq_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_eq([0-9]{1,3})gain/,
    /eg([0-9]{1,3})_eq([0-9]{1,3})gain_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_freq_lfo([0-9]{1,3})/,
    /eg([0-9]{1,3})_level([0-9]{1,3})/,
    /eg([0-9]{1,3})_level([0-9]{1,3})_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_loop/,
    /eg([0-9]{1,3})_loop_count/,
    /eg([0-9]{1,3})_noiselevel/,
    /eg([0-9]{1,3})_noiselevel_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_noisestep/,
    /eg([0-9]{1,3})_noisestep_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_noisetone/,
    /eg([0-9]{1,3})_noisetone_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_pan/,
    /eg([0-9]{1,3})_pan_curve/,
    /eg([0-9]{1,3})_pan_curvecc([0-9]{1,3})/,
    /eg([0-9]{1,3})_pan_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_pitch/,
    /eg([0-9]{1,3})_pitch_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_points/,
    /eg([0-9]{1,3})_rectify/,
    /eg([0-9]{1,3})_rectify_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_resonance/,
    /eg([0-9]{1,3})_resonance2/,
    /eg([0-9]{1,3})_resonance2_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_resonance_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_ringmod/,
    /eg([0-9]{1,3})_ringmod_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_shape([0-9]{1,3})/,
    /eg([0-9]{1,3})_sustain/,
    /eg([0-9]{1,3})_time([0-9]{1,3})/,
    /eg([0-9]{1,3})_time([0-9]{1,3})_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_volume/,
    /eg([0-9]{1,3})_volume_oncc([0-9]{1,3})/,
    /eg([0-9]{1,3})_width/,
    /eg([0-9]{1,3})_width_oncc([0-9]{1,3})/,
    /eq([1-3]{1})_bw/,
    /eq([1-3]{1})_bw_oncc([0-9]{1,3})/,
    /eq([1-3]{1})_bwcc([0-9]{1,3})/,
    /eq([1-3]{1})_dynamic/,
    /eq([1-3]{1})_freq/,
    /eq([1-3]{1})_freq_oncc([0-9]{1,3})/,
    /eq([1-3]{1})_freqcc([0-9]{1,3})/,
    /eq([1-3]{1})_gain/,
    /eq([1-3]{1})_gain_oncc([0-9]{1,3})/,
    /eq([1-3]{1})_gaincc([0-9]{1,3})/,
    /eq([1-3]{1})_type/,
    /eq([1-3]{1})_vel2freq/,
    /eq([1-3]{1})_vel2gain/,
    /eq_bw_oncc([0-9]{1,3})/,
    /eq_freq_oncc([0-9]{1,3})/,
    /eq_gain_oncc([0-9]{1,3})/,
    /fil2_gain_oncc([0-9]{1,3})/,
    /fil_gain_oncc([0-9]{1,3})/,
    /fileg_attack_oncc([0-9]{1,3})/,
    /fileg_attackcc([0-9]{1,3})/,
    /fileg_decay_oncc([0-9]{1,3})/,
    /fileg_decaycc([0-9]{1,3})/,
    /fileg_delay_oncc([0-9]{1,3})/,
    /fileg_delaycc([0-9]{1,3})/,
    /fileg_depth_oncc([0-9]{1,3})/,
    /fileg_depthcc([0-9]{1,3})/,
    /fileg_hold_oncc([0-9]{1,3})/,
    /fileg_holdcc([0-9]{1,3})/,
    /fileg_release_oncc([0-9]{1,3})/,
    /fileg_releasecc([0-9]{1,3})/,
    /fileg_start_oncc([0-9]{1,3})/,
    /fileg_startcc([0-9]{1,3})/,
    /fileg_sustain_oncc([0-9]{1,3})/,
    /fileg_sustaincc([0-9]{1,3})/,
    /fillfo_depth_oncc([0-9]{1,3})/,
    /fillfo_depthcc([0-9]{1,3})/,
    /fillfo_freqcc([0-9]{1,3})/,
    /filter_cutoff_oncc([0-9]{1,3})/,
    /filter_resonance_oncc([0-9]{1,3})/,
    /fx([0-9]{1,3})tomain/,
    /fx([0-9]{1,3})tomix/,
    /gain_cc([0-9]{1,3})/,
    /gain_oncc([0-9]{1,3})/,
    /gate_oncc([0-9]{1,3})/,
    /hicc([0-9]{1,3})/,
    /hihdcc([0-9]{1,3})/,
    /hint_([a-z]*)/,
    /label_cc([0-9]{1,3})/,
    /label_key([0-9]{1,3})/,
    /lfo([0-9]{1,3})_amplitude/,
    /lfo([0-9]{1,3})_amplitude_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_amplitude_smoothcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_amplitude_stepcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_bitred/,
    /lfo([0-9]{1,3})_bitred_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_bitred_smoothcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_bitred_stepcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_count/,
    /lfo([0-9]{1,3})_cutoff/,
    /lfo([0-9]{1,3})_cutoff2/,
    /lfo([0-9]{1,3})_cutoff2_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_cutoff2_smoothcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_cutoff2_stepcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_cutoff_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_cutoff_smoothcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_cutoff_stepcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_decim/,
    /lfo([0-9]{1,3})_decim_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_decim_smoothcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_decim_stepcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_delay/,
    /lfo([0-9]{1,3})_delay_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_depth_lfo([0-9]{1,3})/,
    /lfo([0-9]{1,3})_depthadd_lfo([0-9]{1,3})/,
    /lfo([0-9]{1,3})_drive/,
    /lfo([0-9]{1,3})_drive_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_drive_smoothcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_drive_stepcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_eq([0-9]{1,3})bw/,
    /lfo([0-9]{1,3})_eq([0-9]{1,3})bw_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_eq([0-9]{1,3})bw_smoothcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_eq([0-9]{1,3})bw_stepcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_eq([0-9]{1,3})freq/,
    /lfo([0-9]{1,3})_eq([0-9]{1,3})freq_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_eq([0-9]{1,3})freq_smoothcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_eq([0-9]{1,3})freq_stepcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_eq([0-9]{1,3})gain/,
    /lfo([0-9]{1,3})_eq([0-9]{1,3})gain_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_eq([0-9]{1,3})gain_smoothcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_eq([0-9]{1,3})gain_stepcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_fade/,
    /lfo([0-9]{1,3})_fade_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_freq/,
    /lfo([0-9]{1,3})_freq_lfo([0-9]{1,3})/,
    /lfo([0-9]{1,3})_freq_lfo([0-9]{1,3})_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_freq_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_freq_smoothcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_freq_stepcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_noiselevel/,
    /lfo([0-9]{1,3})_noiselevel_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_noiselevel_smoothcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_noiselevel_stepcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_noisestep/,
    /lfo([0-9]{1,3})_noisestep_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_noisestep_smoothcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_noisestep_stepcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_noisetone/,
    /lfo([0-9]{1,3})_noisetone_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_noisetone_smoothcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_noisetone_stepcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_offset/,
    /lfo([0-9]{1,3})_offset([2-8]{1})/,
    /lfo([0-9]{1,3})_pan/,
    /lfo([0-9]{1,3})_pan_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_pan_smoothcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_pan_stepcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_phase/,
    /lfo([0-9]{1,3})_phase_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_pitch/,
    /lfo([0-9]{1,3})_pitch_curvecc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_pitch_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_pitch_smoothcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_pitch_stepcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_ratio/,
    /lfo([0-9]{1,3})_ratio([2-8]{1})/,
    /lfo([0-9]{1,3})_resonance/,
    /lfo([0-9]{1,3})_resonance2/,
    /lfo([0-9]{1,3})_resonance2_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_resonance2_smoothcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_resonance2_stepcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_resonance_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_resonance_smoothcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_resonance_stepcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_scale/,
    /lfo([0-9]{1,3})_scale([2-8]{1})/,
    /lfo([0-9]{1,3})_smooth/,
    /lfo([0-9]{1,3})_smooth_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_step([0-9]{1,3})/,
    /lfo([0-9]{1,3})_step([0-9]{1,3})_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_steps/,
    /lfo([0-9]{1,3})_volume/,
    /lfo([0-9]{1,3})_volume_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_volume_smoothcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_volume_stepcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_wave/,
    /lfo([0-9]{1,3})_wave([2-8]{1})/,
    /lfo([0-9]{1,3})_wave_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_width/,
    /lfo([0-9]{1,3})_width_oncc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_width_smoothcc([0-9]{1,3})/,
    /lfo([0-9]{1,3})_width_stepcc([0-9]{1,3})/,
    /locc([0-9]{1,3})/,
    /lohdcc([0-9]{1,3})/,
    /loop_length_oncc([0-9]{1,3})/,
    /loop_lengthcc([0-9]{1,3})/,
    /loop_start_oncc([0-9]{1,3})/,
    /loop_startcc([0-9]{1,3})/,
    /noise_level_oncc([0-9]{1,3})/,
    /noise_level_smoothcc([0-9]{1,3})/,
    /noise_step_oncc([0-9]{1,3})/,
    /noise_tone_oncc([0-9]{1,3})/,
    /offset_cc([0-9]{1,3})/,
    /offset_oncc([0-9]{1,3})/,
    /on_hicc([0-9]{1,3})/,
    /on_hihdcc([0-9]{1,3})/,
    /on_locc([0-9]{1,3})/,
    /on_lohdcc([0-9]{1,3})/,
    /oscillator_detune_oncc([0-9]{1,3})/,
    /oscillator_mod_depth_oncc([0-9]{1,3})/,
    /oscillator_mod_smoothcc([0-9]{1,3})/,
    /pan_cc([0-9]{1,3})/,
    /pan_curvecc([0-9]{1,3})/,
    /pan_oncc([0-9]{1,3})/,
    /pan_smoothcc([0-9]{1,3})/,
    /pan_stepcc([0-9]{1,3})/,
    /phaser_depth_oncc([0-9]{1,3})/,
    /phaser_feedback_oncc([0-9]{1,3})/,
    /phaser_freq_oncc([0-9]{1,3})/,
    /phaser_phase_oncc([0-9]{1,3})/,
    /phaser_wet_oncc([0-9]{1,3})/,
    /pitch_curvecc([0-9]{1,3})/,
    /pitch_oncc([0-9]{1,3})/,
    /pitch_smoothcc([0-9]{1,3})/,
    /pitch_stepcc([0-9]{1,3})/,
    /pitcheg_attack_oncc([0-9]{1,3})/,
    /pitcheg_decay_oncc([0-9]{1,3})/,
    /pitcheg_delay_oncc([0-9]{1,3})/,
    /pitcheg_depth_oncc([0-9]{1,3})/,
    /pitcheg_depthcc([0-9]{1,3})/,
    /pitcheg_hold_oncc([0-9]{1,3})/,
    /pitcheg_release_oncc([0-9]{1,3})/,
    /pitcheg_start_oncc([0-9]{1,3})/,
    /pitcheg_sustain_oncc([0-9]{1,3})/,
    /pitchlfo_depth_oncc([0-9]{1,3})/,
    /pitchlfo_depthcc([0-9]{1,3})/,
    /pitchlfo_freqcc([0-9]{1,3})/,
    /position_curvecc([0-9]{1,3})/,
    /position_oncc([0-9]{1,3})/,
    /position_smoothcc([0-9]{1,3})/,
    /position_stepcc([0-9]{1,3})/,
    /resonance2_cc([0-9]{1,3})/,
    /resonance2_curvecc([0-9]{1,3})/,
    /resonance2_oncc([0-9]{1,3})/,
    /resonance2_smoothcc([0-9]{1,3})/,
    /resonance2_stepcc([0-9]{1,3})/,
    /resonance_cc([0-9]{1,3})/,
    /resonance_curvecc([0-9]{1,3})/,
    /resonance_oncc([0-9]{1,3})/,
    /resonance_smoothcc([0-9]{1,3})/,
    /resonance_stepcc([0-9]{1,3})/,
    /reverb_damp_oncc([0-9]{1,3})/,
    /reverb_dry_oncc([0-9]{1,3})/,
    /reverb_input_oncc([0-9]{1,3})/,
    /reverb_predelay_oncc([0-9]{1,3})/,
    /reverb_size_oncc([0-9]{1,3})/,
    /reverb_tone_oncc([0-9]{1,3})/,
    /reverb_wet_oncc([0-9]{1,3})/,
    /reverse_hicc([0-9]{1,3})/,
    /reverse_locc([0-9]{1,3})/,
    /set_cc([0-9]{1,3})/,
    /set_hdcc([0-9]{1,3})/,
    /set_realcc([0-9]{1,3})/,
    /start_hicc([0-9]{1,3})/,
    /start_hihdcc([0-9]{1,3})/,
    /start_locc([0-9]{1,3})/,
    /start_lohdcc([0-9]{1,3})/,
    /static_level_oncc([0-9]{1,3})/,
    /stop_hicc([0-9]{1,3})/,
    /stop_hihdcc([0-9]{1,3})/,
    /stop_locc([0-9]{1,3})/,
    /stop_lohdcc([0-9]{1,3})/,
    /strings_wet_oncc([0-9]{1,3})/,
    /tdfir_dry_oncc([0-9]{1,3})/,
    /tdfir_wet_oncc([0-9]{1,3})/,
    /tune_cc([0-9]{1,3})/,
    /tune_curvecc([0-9]{1,3})/,
    /tune_oncc([0-9]{1,3})/,
    /tune_smoothcc([0-9]{1,3})/,
    /tune_stepcc([0-9]{1,3})/,
    /v([0-9]{1,3})/,
    /var([0-9]{1,3})_/,
    /var([0-9]{1,3})_curvecc([0-9]{1,3})/,
    /var([0-9]{1,3})_mod/,
    /var([0-9]{1,3})_oncc([0-9]{1,3})/,
    /volume_curvecc([0-9]{1,3})/,
    /volume_oncc([0-9]{1,3})/,
    /volume_smoothcc([0-9]{1,3})/,
    /volume_stepcc([0-9]{1,3})/,
    /width_curvecc([0-9]{1,3})/,
    /width_oncc([0-9]{1,3})/,
    /width_smoothcc([0-9]{1,3})/,
    /width_stepcc([0-9]{1,3})/,
    /xfin_hicc([0-9]{1,3})/,
    /xfin_locc([0-9]{1,3})/,
    /xfout_hicc([0-9]{1,3})/,
    /xfout_locc([0-9]{1,3})/
  ];
  const SFZ_OPCODES = {
    scope: 'built_in',
    match: regex.concat(
      /\b/,
      regex.either(...SFZ_OPCODE_PATTERNS),
      /\b/
    )
  };
  return {
    case_insensitive: true,
    keywords: {
      built_in: SFZ_OPCODE_KEYWORDS
    },
    contains: [
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE,
      SFZ_PREPROCESSOR,
      SFZ_HEADERS,
      SFZ_OPCODES
    ]
  }
}
