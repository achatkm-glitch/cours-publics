/* Équations affichées en pleine ligne au-dessus de chaque calculateur (rendues par KaTeX si disponible). */
window.EQUATIONS = {
  "intro": [
    {"titre": "Problème : advection d'un signal sur un domaine périodique", "tex": "u_t+u_x=0,\\qquad x\\in[0,1]\\ \\text{(périodique)},\\qquad C=\\frac{\\Delta t}{\\Delta x}"},
    {"titre": "Signal initial : bosse lisse et créneau", "tex": "u(x,0)=e^{-200\\,(x-0{,}3)^2}+\\mathbf 1_{]0{,}6\\,;\\,0{,}8[}(x)"}
  ],
  "transport": [
    {"titre": "Variable transportée φ (a : vitesse, D : diffusivité)", "tex": "\\frac{\\partial \\phi}{\\partial t}+a\\,\\frac{\\partial \\phi}{\\partial x}=D\\,\\frac{\\partial^2 \\phi}{\\partial x^2}"},
    {"titre": "Péclet : même définition, échelle différente", "tex": "\\boxed{\\mathrm{Pe}_{\\ell}=\\frac{|a|\\ell}{D}},\\quad \\ell=L\\ (\\text{domaine}),\\ \\sigma_0\\ (\\text{largeur}),\\ h\\ (\\text{maille})"},
    {"titre": "Solution exacte gaussienne avec le Péclet de la largeur σ₀", "tex": "\\begin{gathered}\\xi=\\frac{x-at}{\\sigma_0},\\quad t^*=\\frac{|a|t}{\\sigma_0},\\quad \\mathrm{Pe}_{\\sigma_0}=\\frac{|a|\\sigma_0}{D}\\quad (|a|>0,\\ D>0),\\\\\\frac{\\phi(x,t)}{U_0}=\\frac{1}{\\sqrt{1+2t^*/\\mathrm{Pe}_{\\sigma_0}}}\\exp\\!\\left[-\\frac{\\xi^2}{2(1+2t^*/\\mathrm{Pe}_{\\sigma_0})}\\right]\\end{gathered}"},
    {"titre": "Nombres sans dimension à l’échelle initiale σ₀", "tex": "\\begin{gathered}t_c=\\frac{\\sigma_0}{|a|},\\quad t_d=\\frac{\\sigma_0^2}{D},\\quad \\mathrm{Pe}_{\\sigma_0}=\\frac{t_d}{t_c}=\\frac{|a|\\sigma_0}{D}\\quad (|a|>0,\\ D>0),\\\\\\mathrm{Fo}_{\\sigma_0}(t)=\\frac{Dt}{\\sigma_0^2},\\quad \\frac{x_c(t)}{\\sigma_0}=\\operatorname{sgn}(a)\\,\\mathrm{Pe}_{\\sigma_0}\\mathrm{Fo}_{\\sigma_0},\\quad \\frac{\\sigma(t)}{\\sigma_0}=\\sqrt{1+2\\mathrm{Fo}_{\\sigma_0}}\\end{gathered}"}
  ],
  "edpc": [
    {"titre": "EDP quasi linéaire d'ordre 2 à deux variables", "tex": "A\\,u_{xx}+2B\\,u_{xy}+C\\,u_{yy}+F(x,y,u,u_x,u_y)=0"}
  ],
  "edpb": [
    {"type": "elliptique", "titre": "Modèle elliptique — équilibre spatial", "tex": "\\nabla^2u=u_{xx}+u_{yy}=0,\\qquad (x,y)\\in\\Omega,\\qquad u|_{\\partial\\Omega}=g"},
    {"type": "parabolique", "titre": "Modèle parabolique — diffusion", "tex": "u_t=D\\,u_{xx},\\qquad u(x,0)=u_0(x)"},
    {"type": "hyperbolique", "titre": "Modèle hyperbolique — onde", "tex": "u_{tt}=c^2u_{xx},\\qquad u(x,0)=f(x),\\qquad u_t(x,0)=0"}
  ],
  "cl": [
    {"titre": "Conduction stationnaire avec production", "tex": "\\lambda\\,T''+q=0,\\qquad T(0)=T_0\\qquad\\Longrightarrow\\qquad T(x)=T_0+C_1x-\\frac{q}{2\\lambda}\\,x^2"},
    {"titre": "Trois conditions possibles en x = L", "tex": "\\text{Dirichlet : }T(L)=T_L,\\qquad\\text{Neumann : }-\\lambda T'(L)=q_L,\\qquad\\text{Robin : }-\\lambda T'(L)=h\\,\\bigl[T(L)-T_\\infty\\bigr]"}
  ],
  "barre": [
    {"titre": "Problème", "tex": "\\lambda\\,T''+q=0,\\qquad T(0)=T_0,\\quad T(L)=T_L"},
    {"titre": "Différences finies (nœuds)", "tex": "\\frac{T_{i+1}-2T_i+T_{i-1}}{\\Delta x^2}=-\\frac q\\lambda"},
    {"titre": "Volumes finis (bilan sur la cellule P, flux numériques)", "tex": "F_e-F_w+q\\,\\Delta x=0,\\qquad F_e=\\lambda\\,\\frac{T_E-T_P}{\\Delta x},\\quad F_w=\\lambda\\,\\frac{T_P-T_W}{\\Delta x}"},
    {"titre": "Bilan global de flux", "tex": "\\dot q_{0,\\text{sortant}}+\\dot q_{L,\\text{sortant}}=q\\,L"}
  ],
  "peclet": [
    {"titre": "Modèle stationnaire de convection–diffusion", "tex": "a\\,\\frac{d\\phi}{dx}=D\\,\\frac{d^2\\phi}{dx^2},\\quad \\phi(0)=0,\\quad\\phi(L)=1\\quad\\Longrightarrow\\quad \\phi(x)=\\frac{e^{\\mathrm{Pe}^{\\mathrm{s}}_L x/L}-1}{e^{\\mathrm{Pe}^{\\mathrm{s}}_L}-1}"},
    {"titre": "Définition commune et Péclet signé du cas stationnaire", "tex": "\\boxed{\\mathrm{Pe}_{\\ell}=\\frac{|a|\\ell}{D}},\\quad \\ell=L,\\sigma_0,h\\qquad\\begin{gathered}\\mathrm{Pe}^{\\mathrm{s}}_L=\\frac{aL}{D},\\quad \\mathrm{Pe}^{\\mathrm{s}}_h=\\frac{ah}{D}=\\frac{\\mathrm{Pe}^{\\mathrm{s}}_L}{N}\\quad (h=L/N)\\end{gathered}"},
    {"titre": "Centré : le signe de Pe intervient dans le coefficient aval", "tex": "\\phi_e=\\frac{\\phi_P+\\phi_E}{2}\\Longrightarrow a_{aval}=\\frac{D}{h}-\\frac{a}{2}=\\frac{D}{h}\\left(1-\\frac{\\mathrm{Pe}^{\\mathrm{s}}_h}{2}\\right)\\ge0\\iff\\mathrm{Pe}^{\\mathrm{s}}_h\\le2\\quad(a>0)"},
    {"titre": "Reconstruction amont (courant vers x croissants)", "tex": "\\phi_e=\\phi_P\\quad(a>0)"}
  ],
  "jg": [
    {"titre": "Système tridiagonal de la diffusion 1D", "tex": "A\\,\\boldsymbol u=\\boldsymbol b,\\qquad A=\\operatorname{tridiag}(-1,2,-1)"},
    {"titre": "Jacobi", "tex": "\\boldsymbol u^{(k+1)}=D_A^{-1}\\bigl(\\boldsymbol b-(L_A+U_A)\\,\\boldsymbol u^{(k)}\\bigr)"},
    {"titre": "Gauss–Seidel", "tex": "(D_A+L_A)\\,\\boldsymbol u^{(k+1)}=\\boldsymbol b-U_A\\,\\boldsymbol u^{(k)}"},
    {"titre": "Résidu", "tex": "\\boldsymbol r^{(k)}=\\boldsymbol b-A\\,\\boldsymbol u^{(k)}"}
  ],
  "ordre1": [
    {"titre": "Progressive (ordre 1)", "tex": "\\frac{u_{i+1}-u_i}{h}=u'_i+\\mathcal O(h)"},
    {"titre": "Centrée (ordre 2)", "tex": "\\frac{u_{i+1}-u_{i-1}}{2h}=u'_i+\\mathcal O(h^2)"},
    {"titre": "Régressive à trois points (ordre 2)", "tex": "\\frac{3u_i-4u_{i-1}+u_{i-2}}{2h}=u'_i+\\mathcal O(h^2)"}
  ],
  "ordre2": [
    {"titre": "Centrée, trois points (ordre 2)", "tex": "\\frac{u_{i-1}-2u_i+u_{i+1}}{h^2}=u''_i+\\frac{h^2}{12}u_i^{(4)}+\\mathcal O(h^4)"},
    {"titre": "Progressive au bord gauche, trois points (ordre 1)", "tex": "\\frac{u_i-2u_{i+1}+u_{i+2}}{h^2}=u''_i+h u'''_i+\\mathcal O(h^2)"},
    {"titre": "Régressive au bord droit, trois points (ordre 1)", "tex": "\\frac{u_i-2u_{i-1}+u_{i-2}}{h^2}=u''_i-h u'''_i+\\mathcal O(h^2)"},
    {"titre": "Trois points sur un maillage non uniforme", "tex": "\\begin{aligned}D_{xx}u_i&=\\frac{2u_{i-1}}{h_-(h_-+h_+)}-\\frac{2u_i}{h_-h_+}\\\\&\\quad+\\frac{2u_{i+1}}{h_+(h_-+h_+)}\\\\&=u''_i+\\frac{h_+-h_-}{3}u'''_i+\\mathcal O(h^2)\\end{aligned}"}
  ],
  "neumann": [
    {"titre": "Problème", "tex": "-u''=\\cos x,\\qquad u(0)=1,\\quad u'(1)=g=1-\\sin 1,\\qquad u_{\\text{exacte}}=\\cos x+x"},
    {"titre": "Flux imposé et loi de Fourier : la dérivée à discrétiser", "tex": "q_x=-\\lambda\\,T'(x)\\quad\\Longrightarrow\\quad -\\lambda\\,T'(1)=q_L\\quad\\Longrightarrow\\quad T'(1)=-\\frac{q_L}{\\lambda}=g"},
    {"titre": "Fermeture d'ordre 1", "tex": "u_N=u_{N-1}+h\\,g"},
    {"titre": "Fermeture d'ordre 2 : différence régressive à trois points", "tex": "\\frac{3u_N-4u_{N-1}+u_{N-2}}{2h}=g"},
    {"titre": "Point fantôme : on prolonge le maillage d'un nœud hors du domaine", "tex": "\\frac{u_{N+1}-u_{N-1}}{2h}=g\\ \\Longrightarrow\\ u_{N+1}=u_{N-1}+2h\\,g,\\qquad \\text{équation au nœud }N:\\ -2u_{N-1}+2u_N=h^2f_N+2h\\,g"},
    {"titre": "Condition de Fourier (Robin, échange convectif) et solution exacte", "tex": "-\\lambda\\,T'(1)=h\\,\\bigl[T(1)-T_\\infty\\bigr]\\ \\Longrightarrow\\ T'(1)+\\kappa\\,T(1)=g_R,\\qquad \\kappa=\\frac h\\lambda,\\qquad g_R=(1-\\sin 1)+\\kappa(\\cos 1+1)"},
    {"titre": "Fourier : fermetures d'ordre 1 et d'ordre 2", "tex": "\\frac{u_N-u_{N-1}}{h}+\\kappa\\,u_N=g_R,\\qquad \\frac{3u_N-4u_{N-1}+u_{N-2}}{2h}+\\kappa\\,u_N=g_R"},
    {"titre": "Fourier : point fantôme", "tex": "u_{N+1}=u_{N-1}+2h\\,(g_R-\\kappa\\,u_N)\\ \\Longrightarrow\\ -2u_{N-1}+(2+2h\\kappa)\\,u_N=h^2f_N+2h\\,g_R"}
  ],
  "chaleur": [
    {"titre": "Équation de la chaleur et nombre de Fourier de maille", "tex": "u_t=\\alpha\\,u_{xx},\\qquad \\mathrm{Fo}=\\frac{\\alpha\\,\\Delta t}{h^2}"},
    {"titre": "FTCS (explicite)", "tex": "u_i^{n+1}=u_i^n+\\mathrm{Fo}\\,\\bigl(u_{i+1}^n-2u_i^n+u_{i-1}^n\\bigr),\\qquad \\mathrm{Fo}\\le\\tfrac12"},
    {"titre": "BTCS (implicite)", "tex": "-\\mathrm{Fo}\\,u_{i-1}^{n+1}+(1+2\\,\\mathrm{Fo})\\,u_i^{n+1}-\\mathrm{Fo}\\,u_{i+1}^{n+1}=u_i^n"},
    {"titre": "Crank–Nicolson", "tex": "-\\tfrac{\\mathrm{Fo}}{2}u_{i-1}^{n+1}+(1+\\mathrm{Fo})\\,u_i^{n+1}-\\tfrac{\\mathrm{Fo}}{2}u_{i+1}^{n+1}=\\tfrac{\\mathrm{Fo}}{2}u_{i-1}^n+(1-\\mathrm{Fo})\\,u_i^n+\\tfrac{\\mathrm{Fo}}{2}u_{i+1}^n"},
    {"titre": "Dufort–Frankel (explicite, trois niveaux)", "tex": "(1+2\\,\\mathrm{Fo})\\,u_i^{n+1}=(1-2\\,\\mathrm{Fo})\\,u_i^{n-1}+2\\,\\mathrm{Fo}\\,\\bigl(u_{i+1}^n+u_{i-1}^n\\bigr)"},
    {"titre": "Richardson (explicite, trois niveaux)", "tex": "u_i^{n+1}=u_i^{n-1}+2\\,\\mathrm{Fo}\\,\\bigl(u_{i+1}^n-2u_i^n+u_{i-1}^n\\bigr)"}
  ],
  "chemin": [
    {"titre": "Chemin de raffinement", "tex": "\\Delta t=c_0\\,h^{\\,r}"},
    {"titre": "Dufort–Frankel : terme décisif du défaut local", "tex": "\\tau_{\\mathrm{DF}}\\ni\\alpha\\left(\\frac{\\Delta t}{h}\\right)^2u_{tt}\\ \\Longrightarrow\\ \\text{consistant si }r>1"},
    {"titre": "Lax–Friedrichs : terme décisif du défaut local", "tex": "\\tau_{\\mathrm{LxF}}\\ni-\\frac{h^2}{2\\,\\Delta t}\\,\\bigl(1-C_a^2\\bigr)\\,u_{xx}\\ \\Longrightarrow\\ \\text{consistant si }0<r<2"}
  ],
  "adv": [
    {"titre": "Advection et nombre de Courant", "tex": "u_t+a\\,u_x=0,\\qquad C_a=\\frac{a\\,\\Delta t}{h}"},
    {"titre": "Amont (a > 0)", "tex": "u_i^{n+1}=u_i^n-C_a\\,\\bigl(u_i^n-u_{i-1}^n\\bigr)"},
    {"titre": "FTCS centré", "tex": "u_i^{n+1}=u_i^n-\\frac{C_a}{2}\\,\\bigl(u_{i+1}^n-u_{i-1}^n\\bigr)"},
    {"titre": "Lax–Friedrichs", "tex": "u_i^{n+1}=\\frac12\\,\\bigl(u_{i+1}^n+u_{i-1}^n\\bigr)-\\frac{C_a}{2}\\,\\bigl(u_{i+1}^n-u_{i-1}^n\\bigr)"},
    {"titre": "Lax–Wendroff", "tex": "u_i^{n+1}=u_i^n-\\frac{C_a}{2}\\,\\bigl(u_{i+1}^n-u_{i-1}^n\\bigr)+\\frac{C_a^2}{2}\\,\\bigl(u_{i+1}^n-2u_i^n+u_{i-1}^n\\bigr)"},
    {"titre": "Beam–Warming (explicite, amont d'ordre 2, a > 0)", "tex": "u_i^{n+1}=u_i^n-\\frac{C_a}{2}\\,\\bigl(3u_i^n-4u_{i-1}^n+u_{i-2}^n\\bigr)+\\frac{C_a^2}{2}\\,\\bigl(u_i^n-2u_{i-1}^n+u_{i-2}^n\\bigr)"},
    {"titre": "Centré implicite (système linéaire à chaque pas)", "tex": "\\frac{u_i^{n+1}-u_i^n}{\\Delta t}+a\\,\\frac{u_{i+1}^{n+1}-u_{i-1}^{n+1}}{2h}=0"}
  ]
};
