// ─────────────────────────────────────────────────────────
// EXERCISE DATA
// This is a plain JavaScript object (like a dictionary).
// Each key (e.g. 'c1') matches an id in the HTML.
// Each value is an array [] of exercise objects {}.
// ─────────────────────────────────────────────────────────
const exercises = {
  'c1': [
    {id:'sa-cable-fly-r',  name:'Single Arm Cable Fly — Low to High', tag:'Right side first · Pause & squeeze at top', target:'15–20', sets:3},
    {id:'sa-cable-fly-l',  name:'Single Arm Cable Fly — Low to High', tag:'Left side · Match the feel',                target:'15–20', sets:3},
    {id:'sa-press-r',      name:'One Arm Machine Chest Press',        tag:'Right side · Slow 4 sec lower',             target:'15–20', sets:3},
    {id:'sa-press-l',      name:'One Arm Machine Chest Press',        tag:'Left side',                                  target:'15–20', sets:3},
  ],
  'c1b': [
    {id:'cable-cross', name:'Cable Crossover — Low to High', tag:'Both · Cross past center for inner pec', target:'15–20', sets:3},
    {id:'cg-pushups',  name:'Close Grip Pushups',            tag:'Hands fist-width apart · Stop before failure', target:'10–15', sets:3},
  ],
  'c1t': [
    {id:'pushdown-rope', name:'Cable Pushdown — Rope',            tag:'Elbows pinned · Spread rope at bottom · Squeeze',       target:'15–20', sets:3},
    {id:'overhead-tri',  name:'Overhead Cable Tricep Extension',   tag:'Long head stretch · Full range · Control return',       target:'15–20', sets:3},
    {id:'bench-dips',    name:'Tricep Dips — Bench',               tag:'Bodyweight · Elbows back not flared · Slow lower',      target:'15–20', sets:3},
  ],
  'bkw': [
    {id:'lat-pulldown',  name:'Lat Pulldown — Wide Grip',      tag:'Pull to upper chest · Initiate with lats not arms', target:'10–12', sets:4},
    {id:'str-arm-pull',  name:'Straight Arm Cable Pulldown',   tag:'Lat isolation · Arms stay straight throughout',     target:'12–15', sets:3},
  ],
  'bkt': [
    {id:'bb-row',    name:'Barbell Bent Over Row',          tag:'Chest up · Hinge at hips · Pull to lower chest',            target:'8–10',  sets:4},
    {id:'cable-row', name:'Seated Cable Row — Close Grip',  tag:'Squeeze shoulder blades · Slow return',                     target:'10–12', sets:3},
    {id:'sa-db-row', name:'Single Arm Dumbbell Row',        tag:'Feel each side independently · Right side awareness',       target:'10–12', sets:3},
  ],
  'bi': [
    {id:'bb-curl',     name:'Barbell Curl',   tag:'Elbows pinned · Full range of motion',         target:'10–12', sets:3},
    {id:'hammer-curl', name:'Hammer Curl',    tag:'Neutral grip · Brachialis & forearm',           target:'10–12', sets:3},
    {id:'cable-curl',  name:'Cable Curl',     tag:'Constant tension · Squeeze hard at top',        target:'12–15', sets:2},
  ],
  'lgc': [
    {id:'barbell-squat', name:'Barbell Squat',       tag:'Foundation movement · Full depth · Chest up',            target:'6–10', sets:4},
    {id:'rdl',           name:'Romanian Deadlift',   tag:'Hamstrings & glutes · Feel the stretch · Slow lower',    target:'8–10', sets:4},
  ],
  'lgi': [
    {id:'leg-press', name:'Leg Press',           tag:"Quad focus · Full range · Don't lock knees at top",     target:'10–12', sets:3},
    {id:'leg-curl',  name:'Leg Curl Machine',    tag:'Hamstring isolation · Slow 4 sec lower',                 target:'12–15', sets:3},
    {id:'leg-ext',   name:'Leg Extension Machine', tag:'Quad isolation · Squeeze hard at top',                target:'12–15', sets:3},
    {id:'calf-raise',name:'Standing Calf Raise', tag:"Pause at top · Full stretch at bottom · Don't bounce",  target:'15–20', sets:4},
  ],
  'c2c': [
    {id:'bi-mach-press',     name:'Bilateral Machine Chest Press',  tag:'Focus on right side engaging equally',          target:'8–12', sets:4},
    {id:'incline-db-press',  name:'Incline Dumbbell Press',         tag:'Upper chest · Control the descent',             target:'10–12', sets:3},
    {id:'db-fly',            name:'Dumbbell Fly — Flat Bench',      tag:'Slow eccentric · Pause at bottom · Squeeze up', target:'10–12', sets:3},
    {id:'sa-cable-fly-right',name:'Single Arm Cable Fly — Right Only', tag:'Finishing burnout · Right pec reactivation', target:'15',   sets:2},
  ],
  'c2t': [
    {id:'skull-crushers', name:'Skull Crushers — EZ Bar',      tag:'Heavy · Slow lower to forehead · Elbows stay still', target:'6–8',  sets:4},
    {id:'cg-bench',       name:'Close Grip Bench Press',        tag:'Hands shoulder-width · Elbows tucked · Full press',  target:'6–8',  sets:4},
    {id:'pushdown-bar',   name:'Cable Pushdown — Straight Bar', tag:'Heavier than usual · Elbows pinned · Full lockout',  target:'8–10', sets:3},
    {id:'diamond-pushups',name:'Diamond Pushups',               tag:'Weighted if possible · Slow eccentric',              target:'Max',  sets:3},
  ],
  'crs': [
    {id:'plank',      name:'Plank — Standard', tag:"Neutral spine · Don't let hips sag or rise",    target:'45s hold',   sets:3},
    {id:'side-plank', name:'Side Plank',        tag:"Each side · Hips stacked · Don't let them drop", target:'30s each', sets:3},
    {id:'dead-bug',   name:'Dead Bug',           tag:'Slow & controlled · Lower back pressed to floor', target:'10 each', sets:3},
  ],
  'cra': [
    {id:'pallof-press',  name:'Cable Pallof Press', tag:'Anti-rotation · Core resists twisting · Hold 2 sec', target:'10 each', sets:3},
    {id:'russian-twist', name:'Russian Twist',       tag:'Obliques · Feet off floor for more challenge',       target:'20 total', sets:3},
  ],
  'crf': [
    {id:'cable-crunch',    name:'Cable Crunch — Kneeling', tag:"Chin to chest · Feel abs pulling not neck straining", target:'15–20', sets:3},
    {id:'hang-knee-raise', name:'Hanging Knee Raise',       tag:'Lower abs · Controlled swing · No momentum',          target:'12–15', sets:3},
  ],
};

// ─────────────────────────────────────────────────────────
// LOCAL STORAGE — saving and loading data
//
// localStorage is a browser tool that saves data permanently
// on your computer (survives page refresh).
// We store everything as a JSON string.
// JSON.parse() converts the string back into a JS object.
// JSON.stringify() converts a JS object into a string.
// ─────────────────────────────────────────────────────────
function getLog() {
  try { return JSON.parse(localStorage.getItem('wlog') || '{}'); }
  catch(e) { return {}; }
}

function saveLog(log) {
  localStorage.setItem('wlog', JSON.stringify(log));
}

function logSet(exId, weight, reps, date) {
  const log = getLog();
  if (!log[exId]) log[exId] = [];
  // .unshift() adds to the FRONT of the array (newest entry first)
  log[exId].unshift({ weight: parseFloat(weight) || 0, reps: parseInt(reps) || 0, date });
  saveLog(log);
}

function deleteEntry(exId, idx) {
  const log = getLog();
  if (log[exId]) { log[exId].splice(idx, 1); saveLog(log); }
}

function getPR(exId) {
  const log = getLog();
  if (!log[exId] || !log[exId].length) return null;
  // .reduce() scans the whole array and returns the one with the highest weight
  return log[exId].reduce((best, e) => (!best || e.weight > best.weight) ? e : best, null);
}

// ─────────────────────────────────────────────────────────
// BUILD AN EXERCISE ROW (called once per exercise)
//
// This function creates an HTML element in JavaScript
// and fills it with dynamic content from the log.
// ─────────────────────────────────────────────────────────
function renderExercise(container, ex) {
  const log     = getLog();
  const history = log[ex.id] || [];
  const pr      = getPR(ex.id);
  const latest  = history[0];

  const div = document.createElement('div');
  div.className = 'ex-row';
  div.id = 'exrow-' + ex.id;

  const isPR = (w) => pr && w === pr.weight && pr.weight > 0;

  // Build the history list HTML (show last 5 entries)
  const histHTML = history.length
    ? history.slice(0, 5).map((e, i) =>
        `<div class="hist-entry">
          <div>
            <span class="hist-vals">${e.weight > 0 ? e.weight + 'kg' : 'BW'} × ${e.reps}</span>
            ${isPR(e.weight) && i === history.findIndex(x => x.weight === pr.weight)
              ? '<span class="hist-pr">★ PR</span>' : ''}
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            <span class="hist-date">${e.date}</span>
            <button class="del-btn" onclick="delEntry('${ex.id}',${i})">×</button>
          </div>
        </div>`
      ).join('')
    : '<div style="font-size:11px;color:var(--muted);padding:6px 0">No sets logged yet</div>';

  // .innerHTML sets the entire HTML content of the element as a string
  div.innerHTML = `
    <div class="ex-top">
      <div>
        <div class="ex-name">${ex.name}</div>
        <div class="ex-tag">${ex.tag}</div>
      </div>
      <div class="ex-meta">
        <div><div class="sv" style="font-size:16px">${ex.sets}</div><div class="sl">Sets</div></div>
        <div><div class="sv" style="font-size:16px">${ex.target}</div><div class="sl">Target</div></div>
      </div>
    </div>
    ${latest
      ? `<div class="last-logged">Last: <strong style="color:var(--light)">${latest.weight > 0 ? latest.weight + 'kg' : 'BW'} × ${latest.reps}</strong>${pr && latest.weight >= pr.weight && pr.weight > 0 ? ' <span style="color:var(--green)">★ PR</span>' : ''}</div>`
      : ''}
    <div class="log-inputs">
      <div class="inp-group">
        <label>Weight (kg)</label>
        <input type="number" id="w-${ex.id}" placeholder="0 = BW" min="0" step="0.5">
      </div>
      <div class="inp-group">
        <label>Reps</label>
        <input type="number" id="r-${ex.id}" placeholder="Reps" min="0">
      </div>
      <div class="inp-group">
        <label>Date</label>
        <input type="date" id="d-${ex.id}" value="${new Date().toISOString().split('T')[0]}">
      </div>
      <button class="log-btn" onclick="logAndRefresh('${ex.id}')">LOG</button>
    </div>
    <div class="history-box">${histHTML}</div>
  `;

  container.appendChild(div);
}

function logAndRefresh(exId) {
  const w = document.getElementById('w-' + exId)?.value || '0';
  const r = document.getElementById('r-' + exId)?.value;
  const d = document.getElementById('d-' + exId)?.value;
  if (!r) { alert('Enter reps'); return; }
  const dateStr = d
    ? new Date(d + 'T12:00:00').toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'})
    : new Date().toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'});
  logSet(exId, w, r, dateStr);
  refreshExercise(exId);
  updateHeader();
  updateProgress();
}

function delEntry(exId, idx) {
  deleteEntry(exId, idx);
  refreshExercise(exId);
  updateHeader();
  updateProgress();
}

function refreshExercise(exId) {
  const row = document.getElementById('exrow-' + exId);
  if (!row) return;
  const ex = Object.values(exercises).flat().find(e => e.id === exId);
  if (!ex) return;
  const temp = document.createElement('div');
  renderExercise(temp, ex);
  row.replaceWith(temp.firstChild);
}

function renderAll() {
  Object.keys(exercises).forEach(key => {
    const container = document.getElementById('exs-' + key);
    if (!container) return;
    container.innerHTML = '';
    exercises[key].forEach(ex => renderExercise(container, ex));
  });
}

// ─────────────────────────────────────────────────────────
// HEADER STATS
// ─────────────────────────────────────────────────────────
function updateHeader() {
  const log = getLog();
  let total = 0, prs = 0, lastDate = null;

  Object.keys(log).forEach(exId => {
    const entries = log[exId];
    total += entries.length;
    const pr = getPR(exId);
    if (pr && pr.weight > 0) prs++;
    entries.forEach(e => {
      if (!lastDate || e.date > lastDate) lastDate = e.date;
    });
  });

  document.getElementById('totalSessions').textContent = total;
  document.getElementById('totalPRs').textContent = prs;
  document.getElementById('lastSession').textContent = lastDate || '—';
}

// ─────────────────────────────────────────────────────────
// PROGRESS PAGE
// ─────────────────────────────────────────────────────────
function updateProgress() {
  renderBWHistory();
  const log   = getLog();
  const allEx = Object.values(exercises).flat();

  // ── Personal Records ──
  const prContainer = document.getElementById('pr-display');
  const prs = allEx
    .map(ex => ({ ex, pr: getPR(ex.id) }))
    .filter(x => x.pr && x.pr.weight > 0)
    .sort((a, b) => (log[b.ex.id]||[]).length - (log[a.ex.id]||[]).length);

  prContainer.innerHTML = prs.length
    ? prs.map(({ ex, pr }) =>
        `<div class="pr-item">
          <div>
            <div class="pr-name">${ex.name}</div>
            <div style="font-size:10px;color:var(--muted)">${pr.date}</div>
          </div>
          <div class="pr-val">${pr.weight}kg × ${pr.reps}</div>
        </div>`
      ).join('')
    : '<div class="empty-msg">Log some workouts to see your records here</div>';

  // ── Recent Activity ──
  const recentContainer = document.getElementById('recent-activity');
  const allEntries = [];
  allEx.forEach(ex => {
    (log[ex.id] || []).forEach((e, i) =>
      allEntries.push({ ...e, exName: ex.name, exId: ex.id, idx: i })
    );
  });
  allEntries.sort((a, b) => b.date.localeCompare(a.date));
  const recent = allEntries.slice(0, 10);

  recentContainer.innerHTML = recent.length
    ? recent.map(e =>
        `<div class="pr-item">
          <div>
            <div class="pr-name" style="font-size:12px">${e.exName}</div>
            <div style="font-size:10px;color:var(--muted)">${e.date}</div>
          </div>
          <div class="pr-val" style="font-size:16px">${e.weight > 0 ? e.weight + 'kg' : 'BW'} × ${e.reps}</div>
        </div>`
      ).join('')
    : '<div class="empty-msg">No activity yet</div>';

  updateHistoryPage();
}

function updateHistoryPage() {
  const log   = getLog();
  const allEx = Object.values(exercises).flat();
  const container = document.getElementById('full-history');
  const withData  = allEx.filter(ex => log[ex.id]?.length > 0);

  if (!withData.length) {
    container.innerHTML = '<div class="empty-msg" style="padding:40px">No sessions logged yet.<br><span style="font-size:12px">Go to Workouts and start logging.</span></div>';
    return;
  }

  container.innerHTML = withData.map(ex => {
    const entries = log[ex.id] || [];
    const pr      = getPR(ex.id);
    return `
      <div style="background:var(--card);border:1px solid var(--border);border-radius:3px;margin-bottom:10px;padding:14px 18px;">
        <div style="font-size:13px;font-weight:500;margin-bottom:4px">${ex.name}</div>
        <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:10px">
          ${entries.length} sets logged${pr && pr.weight > 0 ? ` · PR: ${pr.weight}kg × ${pr.reps}` : ''}
        </div>
        ${entries.map((e, i) => `
          <div class="hist-entry">
            <div>
              <span class="hist-vals">${e.weight > 0 ? e.weight + 'kg' : 'BW'} × ${e.reps}</span>
              ${pr && e.weight === pr.weight && pr.weight > 0 && entries.findIndex(x => x.weight === pr.weight) === i
                ? '<span class="hist-pr">★ PR</span>' : ''}
            </div>
            <div style="display:flex;align-items:center;gap:8px">
              <span class="hist-date">${e.date}</span>
              <button class="del-btn" onclick="delEntry('${ex.id}',${i});updateProgress()">×</button>
            </div>
          </div>`).join('')}
      </div>`;
  }).join('');
}

// ─────────────────────────────────────────────────────────
// NAV TABS — switch between Workouts / Progress / History
// ─────────────────────────────────────────────────────────
document.querySelectorAll('.ntab').forEach(tab => {
  tab.addEventListener('click', () => {
    const id = tab.dataset.page;

    // Hide all pages, remove active from all tabs
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.ntab').forEach(t => t.classList.remove('active'));

    // Show the selected page and mark tab active
    document.getElementById('page-' + id).classList.add('active');
    tab.classList.add('active');

    if (id === 'progress') updateProgress();
    if (id === 'history')  updateHistoryPage();
  });
});

// ─────────────────────────────────────────────────────────
// WORKOUT CARD TOGGLE — open/close each day's exercises
// ─────────────────────────────────────────────────────────
document.querySelectorAll('.wheader').forEach(header => {
  header.addEventListener('click', () => {
    const target = header.dataset.target;
    document.getElementById(target).classList.toggle('open');
  });
});

// ─────────────────────────────────────────────────────────
// CLEAR ALL button
// ─────────────────────────────────────────────────────────
document.getElementById('clearAllBtn').addEventListener('click', () => {
  if (confirm('Clear ALL logged data? This cannot be undone.')) {
    localStorage.removeItem('wlog');
    renderAll();
    updateHeader();
    updateProgress();
  }
});

// ─────────────────────────────────────────────────────────
// BODY WEIGHT LOG
// ─────────────────────────────────────────────────────────
let bwUnit = 'kg';  // tracks which unit the user selected

function getBWLog() {
  try { return JSON.parse(localStorage.getItem('bwlog') || '[]'); }
  catch(e) { return []; }
}

function saveBWLog(log) {
  localStorage.setItem('bwlog', JSON.stringify(log));
}

// Always store in kg internally — convert for display only
function kgToLbs(kg) { return +(kg * 2.20462).toFixed(1); }
function lbsToKg(lbs) { return +(lbs / 2.20462).toFixed(2); }

function renderBWGraph() {
  const log       = getBWLog();
  const container = document.getElementById('bw-graph');

  // Need at least 2 points to draw a line
  if (log.length < 2) {
    container.innerHTML = '<div class="bw-graph-empty">Log at least 2 entries to see your graph</div>';
    return;
  }

  // The log is newest-first, so reverse it for left→right chronological order
  const points = [...log].reverse();

  // Convert to display unit
  const values = points.map(e => bwUnit === 'lbs' ? kgToLbs(e.kg) : e.kg);

  // Graph dimensions (these are SVG user units, not pixels)
  const W = 500, H = 140;
  const padL = 42, padR = 16, padT = 16, padB = 28;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  // Y axis: min and max with a little breathing room
  const minV = Math.min(...values);
  const maxV = Math.max(...values);
  const range = maxV - minV || 1;          // avoid divide-by-zero if all values equal
  const yMin  = minV - range * 0.15;
  const yMax  = maxV + range * 0.15;

  // Map a data value → SVG y coordinate (top = high value, bottom = low value)
  const toY = v => padT + plotH - ((v - yMin) / (yMax - yMin)) * plotH;
  // Map an index → SVG x coordinate
  const toX = i => padL + (i / (points.length - 1)) * plotW;

  // Build the polyline points string
  const linePoints = values.map((v, i) => `${toX(i)},${toY(v)}`).join(' ');

  // Build the filled area under the line (closed path back along the baseline)
  const areaPath =
    `M ${toX(0)},${toY(values[0])} ` +
    values.map((v, i) => `L ${toX(i)},${toY(v)}`).join(' ') +
    ` L ${toX(values.length - 1)},${H - padB} L ${toX(0)},${H - padB} Z`;

  // Y axis labels: show min, mid, max
  const mid = +((yMin + yMax) / 2).toFixed(1);
  const yLabels = [
    { v: yMax, y: padT },
    { v: mid,  y: padT + plotH / 2 },
    { v: yMin, y: padT + plotH },
  ].map(({ v, y }) => {
    const display = bwUnit === 'lbs' ? Math.round(v) : v.toFixed(1);
    return `<text x="${padL - 6}" y="${y + 4}" text-anchor="end" fill="#555" font-size="9">${display}</text>`;
  }).join('');

  // X axis labels: first, middle, last date
  const xIndices = [0, Math.floor((points.length - 1) / 2), points.length - 1];
  const xLabels = [...new Set(xIndices)].map(i => {
    const shortDate = points[i].date.replace(/,\s*\d{4}$/, ''); // strip year
    return `<text x="${toX(i)}" y="${H - 4}" text-anchor="middle" fill="#555" font-size="9">${shortDate}</text>`;
  }).join('');

  // Dot + tooltip for each data point
  const dots = values.map((v, i) => {
    const display = bwUnit === 'lbs' ? kgToLbs(log[log.length - 1 - i]?.kg ?? 0) + ' lbs' : v + ' kg';
    return `
      <circle cx="${toX(i)}" cy="${toY(v)}" r="3.5" fill="#c8f04a" stroke="#0e0e0e" stroke-width="1.5">
        <title>${display} · ${points[i].date}</title>
      </circle>`;
  }).join('');

  container.innerHTML = `
    <div class="bw-graph">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">

        <!-- Horizontal grid lines -->
        <line x1="${padL}" y1="${padT}"              x2="${W - padR}" y2="${padT}"              stroke="#272727" stroke-width="1"/>
        <line x1="${padL}" y1="${padT + plotH / 2}"  x2="${W - padR}" y2="${padT + plotH / 2}"  stroke="#272727" stroke-width="1"/>
        <line x1="${padL}" y1="${padT + plotH}"       x2="${W - padR}" y2="${padT + plotH}"       stroke="#272727" stroke-width="1"/>

        <!-- Filled area under the line -->
        <path d="${areaPath}" fill="rgba(200,240,74,0.06)"/>

        <!-- The line itself -->
        <polyline points="${linePoints}" fill="none" stroke="#c8f04a" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>

        <!-- Y axis labels -->
        ${yLabels}

        <!-- X axis labels -->
        ${xLabels}

        <!-- Data point dots (on top of everything) -->
        ${dots}

      </svg>
    </div>`;
}

function renderBWHistory() {
  renderBWGraph();
  const log       = getBWLog();
  const container = document.getElementById('bw-history');

  if (!log.length) {
    container.innerHTML = '<div style="font-size:11px;color:var(--muted);padding:8px 0">No entries yet — log your first weight above.</div>';
    return;
  }

  container.innerHTML = log.map((entry, i) => {
    // Display value in the current unit
    const display = bwUnit === 'lbs'
      ? kgToLbs(entry.kg) + ' lbs'
      : entry.kg + ' kg';

    // Compare to the previous entry to show change
    let changeHTML = '';
    if (i < log.length - 1) {
      const prev  = log[i + 1].kg;
      const diff  = +(entry.kg - prev).toFixed(2);
      const diffDisplay = bwUnit === 'lbs'
        ? (+(diff * 2.20462).toFixed(1))
        : diff;
      if (diff > 0)      changeHTML = `<span class="bw-change bw-change--up">+${diffDisplay}${bwUnit}</span>`;
      else if (diff < 0) changeHTML = `<span class="bw-change bw-change--down">${diffDisplay}${bwUnit}</span>`;
      else               changeHTML = `<span class="bw-change bw-change--same">—</span>`;
    }

    return `
      <div class="bw-entry">
        <div>
          <div class="bw-val">${display}</div>
          <div class="bw-date">${entry.date}</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          ${changeHTML}
          <button class="del-btn" onclick="deleteBWEntry(${i})">×</button>
        </div>
      </div>`;
  }).join('');
}

function deleteBWEntry(idx) {
  const log = getBWLog();
  log.splice(idx, 1);
  saveBWLog(log);
  renderBWHistory();
}

// LOG button
document.getElementById('bw-log-btn').addEventListener('click', () => {
  const raw  = parseFloat(document.getElementById('bw-weight').value);
  const date = document.getElementById('bw-date').value;
  if (!raw || raw <= 0) { alert('Enter your weight'); return; }

  const kg = bwUnit === 'lbs' ? lbsToKg(raw) : raw;
  const dateStr = date
    ? new Date(date + 'T12:00:00').toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' })
    : new Date().toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });

  const log = getBWLog();
  log.unshift({ kg, date: dateStr });
  saveBWLog(log);

  document.getElementById('bw-weight').value = '';
  renderBWHistory();
});

// kg / lbs toggle
document.querySelectorAll('.unit-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    bwUnit = btn.dataset.unit;
    document.querySelectorAll('.unit-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('bw-unit-label').textContent = `Weight (${bwUnit})`;
    renderBWHistory();
  });
});

// Set today's date as default in the body weight date input
document.getElementById('bw-date').value = new Date().toISOString().split('T')[0];

// ─────────────────────────────────────────────────────────
// HIGHLIGHT TODAY in the week strip
// ─────────────────────────────────────────────────────────
const todayName = new Date()
  .toLocaleDateString('en-US', { weekday: 'long' })
  .toLowerCase();

const todayEl = document.querySelector(`[data-day="${todayName}"]`);
if (todayEl) todayEl.classList.add('today');

// ─────────────────────────────────────────────────────────
// INIT — render everything on page load
// ─────────────────────────────────────────────────────────
renderAll();
updateHeader();
