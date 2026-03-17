"use client";
import { useState } from "react";

const teams = [
  { name: "India", code: "IND", flag: "🇮🇳", ranking: 1, points: 121, color: "from-blue-600 to-orange-500" },
  { name: "Australia", code: "AUS", flag: "🇦🇺", ranking: 2, points: 118, color: "from-yellow-500 to-green-600" },
  { name: "England", code: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", ranking: 3, points: 112, color: "from-blue-700 to-red-600" },
  { name: "South Africa", code: "SA", flag: "🇿🇦", ranking: 4, points: 108, color: "from-green-600 to-yellow-500" },
  { name: "New Zealand", code: "NZ", flag: "🇳🇿", ranking: 5, points: 104, color: "from-black to-white" },
  { name: "Pakistan", code: "PAK", flag: "🇵🇰", ranking: 6, points: 98, color: "from-green-700 to-white" },
  { name: "West Indies", code: "WI", flag: "🏏", ranking: 7, points: 89, color: "from-red-700 to-yellow-500" },
  { name: "Sri Lanka", code: "SL", flag: "🇱🇰", ranking: 8, points: 85, color: "from-blue-800 to-yellow-400" },
];

const liveMatches = [
  {
    id: 1,
    status: "LIVE",
    format: "T20I",
    tournament: "ICC World Cup 2026",
    team1: { name: "India", code: "IND", flag: "🇮🇳", score: "186/4", overs: "18.3" },
    team2: { name: "Australia", code: "AUS", flag: "🇦🇺", score: "142/3", overs: "14.2" },
    batting: "AUS",
    note: "Australia need 45 runs off 34 balls",
    crr: "9.93",
    rrr: "7.94",
    venue: "MCG, Melbourne",
    batsmen: [
      { name: "Steve Smith", runs: 67, balls: 45, fours: 6, sixes: 2, sr: "148.9" },
      { name: "Glenn Maxwell", runs: 34, balls: 18, fours: 2, sixes: 3, sr: "188.9" },
    ],
    bowlers: [
      { name: "Jasprit Bumrah", overs: "3.2", runs: 24, wickets: 2, econ: "7.20" },
      { name: "Mohammed Siraj", overs: "3.0", runs: 31, wickets: 1, econ: "10.33" },
    ],
  },
  {
    id: 2,
    status: "LIVE",
    format: "ODI",
    tournament: "Champions Trophy 2026",
    team1: { name: "England", code: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: "287/6", overs: "50.0" },
    team2: { name: "South Africa", code: "SA", flag: "🇿🇦", score: "201/5", overs: "35.4" },
    batting: "SA",
    note: "South Africa need 87 runs off 86 balls",
    crr: "5.64",
    rrr: "6.07",
    venue: "Lord's, London",
    batsmen: [
      { name: "Temba Bavuma", runs: 78, balls: 92, fours: 7, sixes: 1, sr: "84.8" },
      { name: "David Miller", runs: 45, balls: 38, fours: 3, sixes: 2, sr: "118.4" },
    ],
    bowlers: [
      { name: "Joe Root", overs: "8.4", runs: 42, wickets: 2, econ: "4.85" },
      { name: "Mark Wood", overs: "7.0", runs: 51, wickets: 1, econ: "7.29" },
    ],
  },
];

const recentResults = [
  {
    id: 1,
    format: "T20I",
    tournament: "ICC World Cup 2026",
    team1: { name: "Pakistan", flag: "🇵🇰", score: "167/8", overs: "20" },
    team2: { name: "New Zealand", flag: "🇳🇿", score: "171/4", overs: "19.2" },
    result: "New Zealand won by 6 wickets",
    date: "Mar 16, 2026",
    venue: "Eden Park, Auckland",
    mom: "Kane Williamson (72* off 48)",
  },
  {
    id: 2,
    format: "Test",
    tournament: "Border-Gavaskar Trophy",
    team1: { name: "India", flag: "🇮🇳", score: "421 & 198/4", overs: "" },
    team2: { name: "Australia", flag: "🇦🇺", score: "389", overs: "" },
    result: "India won by 6 wickets",
    date: "Mar 14, 2026",
    venue: "SCG, Sydney",
    mom: "Yashasvi Jaiswal (134 & 67*)",
  },
  {
    id: 3,
    format: "ODI",
    tournament: "Champions Trophy 2026",
    team1: { name: "West Indies", flag: "🏏", score: "245/9", overs: "50" },
    team2: { name: "Sri Lanka", flag: "🇱🇰", score: "248/6", overs: "48.3" },
    result: "Sri Lanka won by 4 wickets",
    date: "Mar 13, 2026",
    venue: "R.Premadasa, Colombo",
    mom: "Kusal Mendis (89 off 97)",
  },
  {
    id: 4,
    format: "T20I",
    tournament: "ICC World Cup 2026",
    team1: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: "198/4", overs: "20" },
    team2: { name: "South Africa", flag: "🇿🇦", score: "189/7", overs: "20" },
    result: "England won by 9 runs",
    date: "Mar 12, 2026",
    venue: "Edgbaston, Birmingham",
    mom: "Jos Buttler (87 off 52)",
  },
];

const schedule = [
  { id: 1, format: "T20I", tournament: "ICC World Cup 2026", team1: { name: "India", flag: "🇮🇳" }, team2: { name: "Pakistan", flag: "🇵🇰" }, date: "Mar 19, 2026", time: "2:00 PM AEDT", venue: "Narendra Modi Stadium, Ahmedabad" },
  { id: 2, format: "ODI", tournament: "Champions Trophy 2026", team1: { name: "Australia", flag: "🇦🇺" }, team2: { name: "New Zealand", flag: "🇳🇿" }, date: "Mar 20, 2026", time: "10:00 AM AEDT", venue: "SCG, Sydney" },
  { id: 3, format: "Test", tournament: "Border-Gavaskar Trophy", team1: { name: "India", flag: "🇮🇳" }, team2: { name: "Australia", flag: "🇦🇺" }, date: "Mar 22, 2026", time: "11:00 AM AEDT", venue: "MCG, Melbourne" },
  { id: 4, format: "T20I", tournament: "ICC World Cup 2026", team1: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }, team2: { name: "West Indies", flag: "🏏" }, date: "Mar 23, 2026", time: "6:00 PM AEDT", venue: "Lord's, London" },
  { id: 5, format: "ODI", tournament: "Champions Trophy 2026", team1: { name: "Sri Lanka", flag: "🇱🇰" }, team2: { name: "Pakistan", flag: "🇵🇰" }, date: "Mar 24, 2026", time: "3:00 PM AEDT", venue: "R.Premadasa, Colombo" },
];

const players = [
  { name: "Virat Kohli", country: "India", flag: "🇮🇳", role: "Batsman", format: "ODI", rank: 1, rating: 890, runs: 13848, avg: 58.18, hundreds: 50, fifties: 72, image: "VK" },
  { name: "Steve Smith", country: "Australia", flag: "🇦🇺", role: "Batsman", format: "Test", rank: 1, rating: 911, runs: 9532, avg: 59.55, hundreds: 32, fifties: 38, image: "SS" },
  { name: "Jasprit Bumrah", country: "India", flag: "🇮🇳", role: "Bowler", format: "T20I", rank: 1, rating: 867, wickets: 89, avg: 18.42, economy: 6.24, fiveWickets: 0, image: "JB" },
  { name: "Kane Williamson", country: "New Zealand", flag: "🇳🇿", role: "Batsman", format: "Test", rank: 2, rating: 878, runs: 8971, avg: 54.98, hundreds: 31, fifties: 47, image: "KW" },
  { name: "Babar Azam", country: "Pakistan", flag: "🇵🇰", role: "Batsman", format: "T20I", rank: 2, rating: 834, runs: 4021, avg: 45.12, hundreds: 3, fifties: 38, image: "BA" },
  { name: "Pat Cummins", country: "Australia", flag: "🇦🇺", role: "Bowler", format: "Test", rank: 1, rating: 908, wickets: 267, avg: 21.34, economy: 2.98, fiveWickets: 8, image: "PC" },
];

type Tab = "live" | "results" | "schedule" | "standings" | "players";

export default function Home() {
  const [tab, setTab] = useState<Tab>("live");
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<"All" | "Test" | "ODI" | "T20I">("All");

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "live", label: "Live", icon: "🔴" },
    { id: "results", label: "Results", icon: "✅" },
    { id: "schedule", label: "Schedule", icon: "📅" },
    { id: "standings", label: "Rankings", icon: "🏆" },
    { id: "players", label: "Players", icon: "⭐" },
  ];

  const formatColors: Record<string, string> = {
    T20I: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    ODI: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Test: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-900 rounded-full filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900 rounded-full filter blur-3xl opacity-10 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 pb-24">

        {/* Header */}
        <div className="pt-8 pb-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-4xl">🏏</span>
            <h1 className="text-4xl font-black bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              CricketHub
            </h1>
          </div>
          <p className="text-gray-400 text-sm">Live Scores · Results · Rankings · Stats</p>
        </div>

        {/* LIVE TAB */}
        {tab === "live" && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <h2 className="font-bold text-lg">Live Matches</h2>
              <span className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded-full border border-red-500/30">{liveMatches.length} LIVE</span>
            </div>

            {selectedMatch !== null ? (
              // Match Detail View
              <div>
                <button onClick={() => setSelectedMatch(null)} className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors">
                  ← Back to matches
                </button>
                {(() => {
                  const match = liveMatches.find(m => m.id === selectedMatch)!;
                  return (
                    <div>
                      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-5 mb-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className={`text-xs px-2 py-1 rounded-full border ${formatColors[match.format]}`}>{match.format}</span>
                          <span className="text-xs text-gray-400">{match.tournament}</span>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                            <span className="text-red-400 text-xs font-bold">LIVE</span>
                          </div>
                        </div>

                        <div className="space-y-3 mb-4">
                          {[match.team1, match.team2].map((team) => (
                            <div key={team.code} className={`flex justify-between items-center p-3 rounded-2xl ${match.batting === team.code ? "bg-green-900/20 border border-green-700/30" : "bg-gray-800/50"}`}>
                              <div className="flex items-center gap-3">
                                <span className="text-2xl">{team.flag}</span>
                                <div>
                                  <p className="font-bold">{team.name}</p>
                                  {match.batting === team.code && <p className="text-green-400 text-xs">Batting</p>}
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-2xl font-black">{team.score}</p>
                                <p className="text-gray-400 text-sm">{team.overs} ov</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-2xl p-3 mb-4">
                          <p className="text-yellow-400 text-sm font-semibold text-center">{match.note}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-gray-800 rounded-2xl p-3 text-center">
                            <p className="text-2xl font-black text-green-400">{match.crr}</p>
                            <p className="text-gray-500 text-xs">Current RR</p>
                          </div>
                          <div className="bg-gray-800 rounded-2xl p-3 text-center">
                            <p className="text-2xl font-black text-orange-400">{match.rrr}</p>
                            <p className="text-gray-500 text-xs">Required RR</p>
                          </div>
                        </div>
                      </div>

                      {/* Batsmen */}
                      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 mb-4">
                        <h3 className="font-bold text-green-400 mb-3">🏏 Batting</h3>
                        <div className="grid grid-cols-6 text-xs text-gray-500 mb-2">
                          <span className="col-span-2">Batsman</span>
                          <span className="text-center">R</span>
                          <span className="text-center">B</span>
                          <span className="text-center">4s/6s</span>
                          <span className="text-center">SR</span>
                        </div>
                        {match.batsmen.map((b) => (
                          <div key={b.name} className="grid grid-cols-6 py-2 border-t border-gray-800 text-sm">
                            <span className="col-span-2 font-semibold truncate">{b.name}</span>
                            <span className="text-center font-bold text-white">{b.runs}</span>
                            <span className="text-center text-gray-400">{b.balls}</span>
                            <span className="text-center text-gray-400">{b.fours}/{b.sixes}</span>
                            <span className="text-center text-blue-400">{b.sr}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bowlers */}
                      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 mb-4">
                        <h3 className="font-bold text-purple-400 mb-3">🎯 Bowling</h3>
                        <div className="grid grid-cols-5 text-xs text-gray-500 mb-2">
                          <span className="col-span-2">Bowler</span>
                          <span className="text-center">O</span>
                          <span className="text-center">R</span>
                          <span className="text-center">W</span>
                        </div>
                        {match.bowlers.map((b) => (
                          <div key={b.name} className="grid grid-cols-5 py-2 border-t border-gray-800 text-sm">
                            <span className="col-span-2 font-semibold truncate">{b.name}</span>
                            <span className="text-center text-gray-400">{b.overs}</span>
                            <span className="text-center">{b.runs}</span>
                            <span className="text-center font-bold text-red-400">{b.wickets}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-center text-gray-600 text-xs">📍 {match.venue}</p>
                    </div>
                  );
                })()}
              </div>
            ) : (
              // Match List View
              <div className="space-y-4">
                {liveMatches.map((match) => (
                  <div key={match.id} onClick={() => setSelectedMatch(match.id)}
                    className="bg-gray-900 border border-gray-800 hover:border-green-700 rounded-3xl p-5 cursor-pointer transition-all hover:scale-[1.02]">
                    <div className="flex justify-between items-center mb-3">
                      <span className={`text-xs px-2 py-1 rounded-full border ${formatColors[match.format]}`}>{match.format}</span>
                      <span className="text-xs text-gray-400 truncate mx-2">{match.tournament}</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-red-400 text-xs font-bold">LIVE</span>
                      </div>
                    </div>
                    <div className="space-y-2 mb-3">
                      {[match.team1, match.team2].map((team) => (
                        <div key={team.code} className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{team.flag}</span>
                            <span className={`font-semibold ${match.batting === team.code ? "text-white" : "text-gray-400"}`}>{team.name}</span>
                            {match.batting === team.code && <span className="text-green-400 text-xs">●</span>}
                          </div>
                          <div className="text-right">
                            <span className={`font-black text-lg ${match.batting === team.code ? "text-white" : "text-gray-400"}`}>{team.score}</span>
                            <span className="text-gray-500 text-xs ml-1">({team.overs})</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-yellow-900/20 border border-yellow-700/20 rounded-xl p-2">
                      <p className="text-yellow-400 text-xs text-center">{match.note}</p>
                    </div>
                    <p className="text-gray-600 text-xs text-center mt-2">📍 {match.venue} · Tap for details</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* RESULTS TAB */}
        {tab === "results" && (
          <div>
            <h2 className="font-bold text-lg mb-4">✅ Recent Results</h2>
            <div className="space-y-4">
              {recentResults.map((match) => (
                <div key={match.id} className="bg-gray-900 border border-gray-800 rounded-3xl p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full border ${formatColors[match.format]}`}>{match.format}</span>
                    <span className="text-xs text-gray-400">{match.date}</span>
                  </div>
                  <div className="space-y-2 mb-3">
                    {[match.team1, match.team2].map((team) => (
                      <div key={team.name} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{team.flag}</span>
                          <span className="font-semibold">{team.name}</span>
                        </div>
                        <span className="font-black text-lg">{team.score}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-green-900/20 border border-green-700/20 rounded-xl p-2 mb-2">
                    <p className="text-green-400 text-xs text-center font-semibold">{match.result}</p>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>⭐ MOM: {match.mom}</span>
                    <span>📍 {match.venue}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCHEDULE TAB */}
        {tab === "schedule" && (
          <div>
            <h2 className="font-bold text-lg mb-4">📅 Upcoming Matches</h2>
            <div className="space-y-4">
              {schedule.map((match) => (
                <div key={match.id} className="bg-gray-900 border border-gray-800 rounded-3xl p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full border ${formatColors[match.format]}`}>{match.format}</span>
                    <span className="text-xs text-gray-400">{match.tournament}</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{match.team1.flag}</span>
                      <span className="font-bold">{match.team1.name}</span>
                    </div>
                    <div className="text-center">
                      <span className="bg-gray-800 px-3 py-1 rounded-full text-sm font-bold text-gray-300">VS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{match.team2.name}</span>
                      <span className="text-3xl">{match.team2.flag}</span>
                    </div>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-700/20 rounded-xl p-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-blue-400">📅 {match.date}</span>
                      <span className="text-blue-400">🕐 {match.time}</span>
                    </div>
                    <p className="text-gray-400 text-xs text-center mt-1">📍 {match.venue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STANDINGS TAB */}
        {tab === "standings" && (
          <div>
            <h2 className="font-bold text-lg mb-4">🏆 ICC Team Rankings</h2>
            <div className="flex gap-2 mb-4 overflow-x-auto">
              {(["All", "Test", "ODI", "T20I"] as const).map((f) => (
                <button key={f} onClick={() => setSelectedFormat(f)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${selectedFormat === f ? "bg-green-500 text-white" : "bg-gray-900 text-gray-400 hover:bg-gray-800"}`}>
                  {f}
                </button>
              ))}
            </div>
            <div className="space-y-3">
              {teams.map((team, i) => (
                <div key={team.code} className={`bg-gray-900 border rounded-2xl p-4 flex items-center gap-4 transition-all hover:scale-[1.02] ${i === 0 ? "border-yellow-500/50 bg-yellow-900/10" : i === 1 ? "border-gray-400/50 bg-gray-800/30" : i === 2 ? "border-orange-500/50 bg-orange-900/10" : "border-gray-800"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-lg ${i === 0 ? "bg-yellow-500 text-black" : i === 1 ? "bg-gray-400 text-black" : i === 2 ? "bg-orange-500 text-black" : "bg-gray-800 text-gray-400"}`}>
                    {team.ranking}
                  </div>
                  <span className="text-3xl">{team.flag}</span>
                  <div className="flex-1">
                    <p className="font-bold">{team.name}</p>
                    <p className="text-gray-400 text-xs">{team.code}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-xl text-green-400">{team.points}</p>
                    <p className="text-gray-500 text-xs">Rating</p>
                  </div>
                  <div className="w-16">
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${team.color} rounded-full`}
                        style={{ width: `${(team.points / 125) * 100}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PLAYERS TAB */}
        {tab === "players" && (
          <div>
            <h2 className="font-bold text-lg mb-4">⭐ Top Players</h2>
            <div className="space-y-4">
              {players.map((player) => (
                <div key={player.name} className="bg-gray-900 border border-gray-800 rounded-3xl p-5 hover:border-gray-600 transition-all hover:scale-[1.02]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center font-black text-lg`}>
                      {player.image}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-black text-lg">{player.name}</p>
                        <span className="text-lg">{player.flag}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{player.country} · {player.role}</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs px-2 py-1 rounded-full border ${formatColors[player.format]}`}>{player.format}</span>
                      <p className="text-yellow-400 font-bold mt-1">#{player.rank} Ranked</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {player.role === "Batsman" ? (
                      <>
                        <div className="bg-gray-800 rounded-xl p-2 text-center">
                          <p className="font-black text-green-400">{player.runs?.toLocaleString()}</p>
                          <p className="text-gray-500 text-xs">Runs</p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-2 text-center">
                          <p className="font-black text-blue-400">{player.avg}</p>
                          <p className="text-gray-500 text-xs">Avg</p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-2 text-center">
                          <p className="font-black text-yellow-400">{player.hundreds}</p>
                          <p className="text-gray-500 text-xs">100s</p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-2 text-center">
                          <p className="font-black text-purple-400">{player.fifties}</p>
                          <p className="text-gray-500 text-xs">50s</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-gray-800 rounded-xl p-2 text-center">
                          <p className="font-black text-red-400">{player.wickets}</p>
                          <p className="text-gray-500 text-xs">Wickets</p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-2 text-center">
                          <p className="font-black text-blue-400">{player.avg}</p>
                          <p className="text-gray-500 text-xs">Avg</p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-2 text-center">
                          <p className="font-black text-yellow-400">{player.economy}</p>
                          <p className="text-gray-500 text-xs">Econ</p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-2 text-center">
                          <p className="font-black text-purple-400">{player.fiveWickets}</p>
                          <p className="text-gray-500 text-xs">5W</p>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>ICC Rating</span>
                      <span className="text-green-400 font-bold">{player.rating}</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full transition-all duration-700"
                        style={{ width: `${(player.rating / 1000) * 100}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-950/95 backdrop-blur border-t border-gray-800 z-50">
        <div className="max-w-2xl mx-auto px-4 py-2">
          <div className="flex justify-around">
            {tabs.map((t) => (
              <button key={t.id} onClick={() => { setTab(t.id); setSelectedMatch(null); }}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${tab === t.id ? "text-green-400" : "text-gray-500 hover:text-gray-300"}`}>
                <span className="text-xl">{t.icon}</span>
                <span className="text-xs font-semibold">{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
